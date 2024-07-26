import { Injectable } from '@nestjs/common';
import { Flower } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class FlowersService {
  constructor(private readonly prisma:PrismaService) {}

  findAll() {
    return this.prisma.flower.findMany();

    // return [
    //   {
    //     name: 'rose',
    //     color: 'red',
    //     price: 5,
    //   },
    //   {
    //     name: 'tulip',
    //     color: 'purple',
    //     price: 6,
    //   },
    //   {
    //     name: 'daisy',
    //     color: 'yellow',
    //     price: 7,
    //   }];
  }
}
