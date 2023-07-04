import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AnswersService } from './answers.service';
import { AnswersController } from './answers.controller';
import { Answer } from './answer.entity';
import { User } from '../users/user.entity';
import { Meal } from '../meals/meal.entity';

@Module({
    imports: [SequelizeModule.forFeature([Answer, User, Meal])],
    providers: [AnswersService],
    controllers: [AnswersController],
})
export class AnswersModule {}
