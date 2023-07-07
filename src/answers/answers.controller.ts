import { Controller, Get, Post, Param, Body, Query, UsePipes } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { CreateAnswersDto } from './dto/create-answer.dto';
import { ValidationPipe } from "@nestjs/common";


@Controller('answers')
export class AnswersController {
    constructor(private readonly answersService: AnswersService) {}

    @Post()
    create(@Body() createAnswersDto: CreateAnswersDto) {
        return this.answersService.create(createAnswersDto);
    }

    @Get(':user_id')
    @UsePipes(new ValidationPipe({transform: true}))
  find(
    @Param('user_id') userId: string,
    @Query('include_meals')  includeMeals: boolean,
  ) {
        console.log('What is includeMeals type?', typeof includeMeals)
        return this.answersService.findAll(userId, includeMeals);
    }

    @Get(':user_id/summary')
    summary(@Param('user_id') userId: string) {
        return this.answersService.getSummary(userId);
    }
}
