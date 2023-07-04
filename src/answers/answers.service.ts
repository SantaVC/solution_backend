import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Answer } from './answer.entity';
import { Meal } from '../meals/meal.entity';
import { Sequelize } from 'sequelize-typescript';
import { CreateAnswersDto } from '../dto/post-control.dto';

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
        if (includeMeals) {
            return this.answerModel.findAll({ where: { user_id: userId }, include: [Meal] });
        } else {
            return this.answerModel.findAll({ where: { user_id: userId } });
        }
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
          100 * salty_count / (salty_count + sweet_count) AS saltyMeals,
          100 * sweet_count / (salty_count + sweet_count) AS sweetMeals
        FROM summary;

    `);
        return results[0];
    }
}
