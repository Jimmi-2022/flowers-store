import { Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { AuthGuard } from '../conception/guard';
import { LoggingInterceptor } from '../conception/interceptor';

@Controller('flowers')
@UseInterceptors(LoggingInterceptor)
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}


  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.flowersService.findAll();
  }
}
