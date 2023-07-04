import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { CreateMealDto } from '../dto/post-control.dto';
import { MealsService } from './meals.service';
import { Meal } from './meal.entity';

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
