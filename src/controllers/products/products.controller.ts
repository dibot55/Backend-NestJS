import {
  Controller,
  Get,
  Param,
  Query,
  DefaultValuePipe,
} from '@nestjs/common'; // Decoradores

@Controller('products')
export class ProductsController {
  //Recibir un unico parametro
  @Get(':id')
  getProduct(@Param('id') id: string) {
    return `this is the ${id}`;
  }

  // Query mas especifica con valores por defecto
  @Get()
  getProductsQuery(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products: limite => ${limit} offset => ${offset} brand => ${brand}`;
  }

  // Querys con valores por defecto usando pipes
  @Get()
  getProducts(
    @Query('limit', new DefaultValuePipe(100)) limit: number,
    @Query('offset', new DefaultValuePipe(0)) offset: number,
    @Query('brand') brand: string,
  ) {
    return `products: limite => ${limit} offset => ${offset} brand => ${brand}`;
  }
}
