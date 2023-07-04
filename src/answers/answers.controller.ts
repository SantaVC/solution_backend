import { Controller, Get, Post, Param, Body, Query } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { CreateAnswersDto } from '../dto/post-control.dto';
import { Answer } from './answer.entity';

@Controller('answers')
export class AnswersController {
    constructor(private readonly answersService: AnswersService) {}

    @Post()
    create(@Body() createAnswersDto: CreateAnswersDto) {
        return this.answersService.create(createAnswersDto);
    }

    @Get(':user_id')
    find(@Param('user_id') userId: string, @Query('include_meals') includeMeals: boolean) {
        return this.answersService.findAll(userId, includeMeals);
    }

    @Get(':user_id/summary')
    summary(@Param('user_id') userId: string) {
        return this.answersService.getSummary(userId);
    }
}
