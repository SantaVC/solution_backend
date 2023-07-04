import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MealsService } from './meals.service';
import { MealsController } from './meals.controller';
import { Meal } from './meal.entity';

@Module({
    imports: [SequelizeModule.forFeature([Meal])],
    providers: [MealsService],
    controllers: [MealsController],
})
export class MealsModule {}
