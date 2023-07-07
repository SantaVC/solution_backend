import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { MealsService } from './meals.service';
import { CreateMealDto } from './dto/create-meal.dto';

@Controller('meals')
export class MealsController {
    constructor(private readonly mealsService: MealsService) {}

    @Post()
    create(@Body() createMealDto: CreateMealDto) {
        return this.mealsService.create(createMealDto);
    }

    @Get()
    findAll() {
        return this.mealsService.findAll();
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.mealsService.remove(id);
    }
}
