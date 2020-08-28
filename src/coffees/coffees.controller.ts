import { Controller, Get, Param, Post, Body, Patch, Delete, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

export interface PaginationQuery {
  limit: string;
  offset: string;
}

@Controller('coffees')
export class CoffeesController {

  constructor(private readonly coffeesService: CoffeesService) { }

  @Get()
  findAll(@Query() paginationQuery: PaginationQuery): Coffee[] {
    // const { limit, offset } = paginationQuery;
    return this.coffeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Coffee {
    return this.coffeesService.findOne(id);
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto): void {
    return this.coffeesService.create(createCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto): void {
    return this.coffeesService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    return this.coffeesService.remove(id);
  }
}
