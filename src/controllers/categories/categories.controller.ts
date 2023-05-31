import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  //Recibir dos parametros
  @Get(':cateogoriesId/products/:productsId')
  getCategories(
    @Param('cateogoriesId') cateogoriesId: string,
    @Param('productsId') productsId: string,
  ) {
    return `this is the ${cateogoriesId} and the produts is ${productsId}`;
  }
}
