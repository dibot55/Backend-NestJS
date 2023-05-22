import {
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
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

  //Recibir un unico parametro
  @Get('products/:id')
  getProduct(@Param('id') id: string) {
    return `this is the ${id}`;
  }

  //Recibir dos parametros
  @Get('categories/:cateogoriesId/products/:productsId')
  getCategories(
    @Param('cateogoriesId') cateogoriesId: string,
    @Param('productsId') productsId: string,
  ) {
    return `this is the ${cateogoriesId} and the produts is ${productsId}`;
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
}
