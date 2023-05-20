import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // Endpoints
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('new')
  newEndpoint() {
    return 'Este soy yo pero en otro endpoint';
  }
}
