import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla']
    }
  ];

  findAll(): Coffee[] {
    return this.coffees;
  }

  findOne(id: number): Coffee | undefined {
    const coffee = this.coffees.find(c => c.id === id);
    if (!coffee) {
      throw new NotFoundException('Resource not found');
    }
    return coffee;
  }

  create(createCoffeeDto: CreateCoffeeDto): void {
    const item = this.coffees.reduce(
      (prev, current) => (+prev.id > +current.id) ? prev : current)

    this.coffees.push({
      ...createCoffeeDto,
      id: item.id + 1
    });
  }

  update(id: string, updateCoffeeDto: Partial<Coffee>): void {
    const coffee = this.findOne(+id);
    if (coffee) { }
  }

  remove(id: string): void {
    const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }

}
