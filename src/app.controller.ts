import {
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common'; // Decoradores
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

  // Validar un unico tipo de parametro
  @Get('prod/:id')
  getProd(
    @Param(
      'id',
      new ParseIntPipe({
        errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
      }),
    )
    id: number,
  ) {
    return `this is the ${id}`;
  }

  // Query en Nest any
  @Get('productz')
  getProductzQuery(@Query() params: any) {
    const { limit, offset } = params;
    return `products: limite => ${limit} offset => ${offset}`;
  }

  // Choque de rutas
  @Get('name/crokiezi') // Recibe una ruta
  getNames() {
    return `this is my kindom -----`;
  }

  @Get('name/:id') // Recibe un parametro
  getName(@Param('id') id: number) {
    return `this is my kindom ${id}`;
  }
}
