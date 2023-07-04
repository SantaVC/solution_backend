import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMealDto } from '../dto/post-control.dto';
import { Meal } from './meal.entity';

@Injectable()
export class MealsService {
    constructor(
        @InjectModel(Meal)
        private mealModel: typeof Meal,
    ) {}

    create(createMealDto: CreateMealDto) {
        return this.mealModel.create({ ...createMealDto });
    }

    findAll() {
        return this.mealModel.findAll();
    }

    remove(id: string) {
        return this.mealModel.destroy({ where: { id } });
    }
}
