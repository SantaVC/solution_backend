import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Answer } from './answer.entity';
import { Meal } from '../meals/meal.entity';
import { Sequelize } from 'sequelize-typescript';
import { CreateAnswersDto } from './dto/create-answer.dto';

@Injectable()
export class AnswersService {
    constructor(
        @InjectModel(Answer)
        private answerModel: typeof Answer,
        private readonly sequelize: Sequelize,
    ) {}

    create(createAnswersDto: CreateAnswersDto) {
        return this.answerModel.create({ ...createAnswersDto });
    }

    async findAll(userId: string, includeMeals: boolean) {
        const include = includeMeals ? [Meal] : [];
        return this.answerModel.findAll({where: { user_id: userId}, include});
    }

    async getSummary(userId: string) {
        const [results, metadata] = await this.sequelize.query(`
        WITH summary AS (
          SELECT
            COUNT(*) FILTER (WHERE meal.is_salty = true AND answer.likes = true) AS salty_count,
            COUNT(*) FILTER (WHERE meal.is_salty = false AND answer.likes = true) AS sweet_count
          FROM "Answers" AS "answer"
          LEFT JOIN "Meals" AS "meal" ON answer.meal_id = meal.id
          WHERE answer.user_id = ${userId}
        )
        SELECT
            COALESCE(100 * salty_count / NULLIF((salty_count + sweet_count), 0), 0) AS saltyMeals,
            COALESCE(100 * sweet_count / NULLIF((salty_count + sweet_count), 0), 0) AS sweetMeals
        FROM summary;

    `);
        return results[0];
    }
}
