import {
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Query,
  DefaultValuePipe,
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

  // Query en Nest any
  @Get('productz')
  getProductzQuery(@Query() params: any) {
    const { limit, offset } = params;
    return `products: limite => ${limit} offset => ${offset}`;
  }

  // Query mas especifica con valores por defecto
  @Get('products')
  getProductsQuery(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products: limite => ${limit} offset => ${offset} brand => ${brand}`;
  }

  // Querys con valores por defecto usando pipes
  @Get('products')
  getProducts(
    @Query('limit', new DefaultValuePipe(100)) limit: number,
    @Query('offset', new DefaultValuePipe(0)) offset: number,
    @Query('brand') brand: string,
  ) {
    return `products: limite => ${limit} offset => ${offset} brand => ${brand}`;
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
