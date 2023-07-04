import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { MealsModule } from './meals/meals.module';
import { AnswersModule } from './answers/answers.module';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from './sequelize.config';
import { User } from './users/user.entity';
import { Meal } from './meals/meal.entity';
import { Answer } from './answers/answer.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [databaseConfig] }),
    SequelizeModule.forRoot({
      ...databaseConfig(),
      models: [User, Meal, Answer],
    }),
    UsersModule,
    MealsModule,
    AnswersModule,
  ],
})
export class AppModule {}
