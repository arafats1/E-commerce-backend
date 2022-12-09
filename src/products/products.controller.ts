import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';

@Controller('products')
@ApiTags('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // @Post()
  // @ApiOperation({ summary: 'Create new product' })
  // @ApiBody({
  //   schema: {
  //     type: 'object',
  //     properties: {
  //       color: {
  //         type: 'string',
  //         example: 'Red',
  //         description: 'This is the color of the product',
  //       },
  //       size: {
  //         type: 'string',
  //         example: 'small',
  //         description: 'This is the size of the product',
  //       },
  //       listings: {
  //         type: 'object',
  //         example: [
  //           {
  //             "itemPrice": "0.78ETH",
  //             "quantity": 12,
  //             "currency": "ETH",
  //             "description": "This is a description of the product",
  //           }
  //         ],
  //         description: "This is specific information about a product.",
  //       }
  //     },
  //   },
  // })
  // @ApiResponse({ 
  //   status: 200, 
  //   description: 'Successful', 
  // })
  // @ApiResponse({
  //   status: 201,
  //   description: 'Created',
  // })
  // @ApiResponse({
  //   status: 401,
  //   description: 'Unauthorized',
  // })
  // @ApiResponse({ 
  //   status: 403, 
  //   description: 'Forbidden', 
  // })
  // @ApiResponse({ 
  //   status: 500, 
  //   description: 'Internal server error', 
  // })
  // create(@Body() createProductDto: CreateProductDto) {
  //   return this.productsService.create(createProductDto);
  // }

  @Get()
  @ApiOperation({ summary: 'Get list of all products' })
  @ApiResponse({ 
    status: 200, 
    description: 'Successful', 
  })
  @ApiResponse({ 
    status: 403, 
    description: 'Forbidden', 
  })
  @ApiResponse({ 
    status: 500, 
    description: 'Internal server error', 
  })
  findAll() {
    return this.productsService.findAll();
  }


  @Get(':id')
  @ApiOperation({ summary: 'Get product by id' })
  @ApiResponse({ 
    status: 200, 
    description: 'Successful', 
  })
  @ApiResponse({ 
    status: 403, 
    description: 'Forbidden', 
  })
  @ApiResponse({ 
    status: 500, 
    description: 'Internal server error', 
  })
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }


  @Patch(':id')
  @ApiOperation({ summary: 'Update a specific product' })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'Should be an id of a product that exists in the database',
    required: true,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        color: {
          type: 'string',
          example: 'Red',
          description: 'This is the color of the product',
        },
        size: {
          type: 'string',
          example: 'small',
          description: 'This is the size of the product',
        },
        listings: {
          type: 'object',
          example: [
            {
              "itemPrice": "0.78ETH",
              "quantity": 12,
              "currency": "ETH",
              "description": "This is a description of the product",
            }
          ],
          description: "This is specific information about a product.",
        }
      },
    },
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Successful', 
  })
  @ApiResponse({
    status: 201,
    description: 'Created',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  })
  @ApiResponse({ 
    status: 403, 
    description: 'Forbidden', 
  })
  @ApiResponse({ 
    status: 500, 
    description: 'Internal server error', 
  })
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete product' })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'Should be an id of a product that exists in the database',
    required: true,
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Successful', 
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  })
  @ApiResponse({ 
    status: 403, 
    description: 'Forbidden', 
  })
  @ApiResponse({ 
    status: 500, 
    description: 'Internal server error', 
  })
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a specific product' })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'Should be an id of a product that exists in the database',
    required: true,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        color: {
          type: 'string',
          example: 'Red',
          description: 'This is the color of the product',
        },
        size: {
          type: 'string',
          example: 'small',
          description: 'This is the size of the product',
        },
        listings: {
          type: 'object',
          example: [
            {
              "itemPrice": "0.78ETH",
              "quantity": 12,
              "currency": "ETH",
              "description": "This is a description of the product",
            }
          ],
          description: "This is specific information about a product.",
        }
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Successful',
  })
  @ApiResponse({
    status: 201,
    description: 'Created',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
  })
  replace(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.replace(+id, updateProductDto);
  }
  
}
