import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';


@Controller('items')
@ApiTags('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  @ApiOperation({ summary: 'Add an item' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          example: 'Apple smart watch/ Kaguta Laudromat/ Atwiine Estates',
          description: 'This is a name of an item',
        },
        categoryId: {
          type: 'number',
          example: 1,
          description: 'This is a category id of an already existing category',
        },
        brandId: {
          type: 'number',
          example: 1,
          description: 'This is an optional field that is relevant for only products. It is a brand id of an already existing brand',
        },
        images: {
          type: 'object',
          example: [
            {
              "url": "https://images.unsplash.com/photo-1610000000000-000000000000?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              "resolution": "600x500",
              "type": "item image"
            }
          ],
          description: 'An array of Image or images of the item',
        },
        listings: {
          type: 'object',
          example: [
            {
              "products":[
                {
                  "color": "red",
                  "size": "small",
                }
              ],
              "service": [
                {
                  "type": "wash and iron",
                }
              ],
              "properties": [
                {
                  "location":"Central",
                  "size":"50 acres",
                  "type": "rent or purchase",
                }
              ],
              "itemPrice": "0.78ETH",
              "quantity": 12,
              "currency": "ETH",
              "description": "This is a description of the item",
            }
          ],
          description: "An item can only belong to one super category either product, service or property. If it is a product, it can have multiple products, if it is a service, it can have multiple services and if it is a property, it can have multiple properties. The item price is the price of the item in the currency specified. The quantity is the number of items available for sale. The currency is the currency in which the item is sold.",
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
  @ApiTags('items')
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto);
  }

  @Get()
  @ApiTags('items')
  @ApiOperation({ summary: 'Displays all items' })
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
    return this.itemsService.findAll();
  }

  // @Get(':id')
  // @ApiOperation({ summary: 'Displays an item' })
  // @ApiResponse({
  //   status: 200,
  //   description: 'Successful',
  // })
  // @ApiResponse({
  //   status: 403,
  //   description: 'Forbidden',
  // })
  // @ApiResponse({
  //   status: 500,
  //   description: 'Internal server error',
  // })
  // findOne(@Param('id') id: string) {
  //   return this.itemsService.findOne(+id);
  // }

  @Patch(':id')
  @ApiTags('items')
  @ApiOperation({ summary: 'Updates an item' })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'Should be an id of an item that exists in the database',
    required: true,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          example: 'Apple smart watch/ Kaguta Laudromat/ Atwiine Estates',
          description: 'This is a name of an item',
        },
        categoryId: {
          type: 'number',
          example: 1,
          description: 'This is a category id of an already existing category',
        },
        brandId: {
          type: 'number',
          example: 1,
          description: 'This is an optional field that is relevant for only products. It is a brand id of an already existing brand',
        },
        images: {
          type: 'object',
          example: [
            {
              "url": "https://images.unsplash.com/photo-1610000000000-000000000000?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              "resolution": "600x500",
              "type": "item image"
            }
          ],
          description: 'An array of Image or images of the item',
        },
        listings: {
          type: 'object',
          example: [
            {
              "products":[
                {
                  "color": "red",
                  "size": "small",
                }
              ],
              "service": [
                {
                  "type": "wash and iron",
                }
              ],
              "properties": [
                {
                  "location":"Central",
                  "size":"50 acres",
                  "type": "rent or purchase",
                }
              ],
              "itemPrice": "0.78ETH",
              "quantity": 12,
              "currency": "ETH",
              "description": "This is a description of the item",
            }
          ],
          description: "An item can only belong to one super category either product, service or property. If it is a product, it can have multiple products, if it is a service, it can have multiple services and if it is a property, it can have multiple properties. The item price is the price of the item in the currency specified. The quantity is the number of items available for sale. The currency is the currency in which the item is sold.",
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
  update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemsService.update(+id, updateItemDto);
  }

  @Get('popular')
  @ApiTags('items')
  @ApiOperation({ summary: 'Displays popular items' })
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
  findPopular() {
    return this.itemsService.findPopular();
  }

  @Get('popular/:id')
  @ApiTags('items')
  @ApiOperation({ summary: 'Displays a popular item' })
  findPopularInCategory(@Param('id') id: string) {
    return this.itemsService.findPopularItem(+id);
  }


  @Get('daily-deals')
  @ApiTags('items')
  @ApiOperation({ summary: 'Displays daily deals items' })
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
  findDailyDeals() {
    return this.itemsService.findDailyDeals();
  }

  @Get('daily-deals/:id')
  @ApiTags('items')
  @ApiOperation({ summary: 'Displays a daily deals item' })
  findDailyDealsInCategory(@Param('id') id: string) {
    return this.itemsService.findDailyDealsItem(+id);
  }


  @Delete(':id')
  @ApiTags('items')
  @ApiOperation({ summary: 'Deletes an item' })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'Should be an id of an item that exists in the database',
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
    return this.itemsService.remove(+id);
  }

  @Put(':id')
  @ApiTags('items')
  @ApiOperation({ summary: 'Replaces an item' })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'Should be an id of an item that exists in the database',
    required: true,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          example: 'Apple smart watch/ Kaguta Laudromat/ Atwiine Estates',
          description: 'This is a name of an item',
        },
        categoryId: {
          type: 'number',
          example: 1,
          description: 'This is a category id of an already existing category',
        },
        brandId: {
          type: 'number',
          example: 1,
          description: 'This is an optional field that is relevant for only products. It is a brand id of an already existing brand',
        },
        images: {
          type: 'object',
          example: [
            {
              "url": "https://images.unsplash.com/photo-1610000000000-000000000000?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              "resolution": "600x500",
              "type": "item image"
            }
          ],
          description: 'An array of Image or images of the item',
        },
        listings: {
          type: 'object',
          example: [
            {
              "products":[
                {
                  "color": "red",
                  "size": "small",
                }
              ],
              "service": [
                {
                  "type": "wash and iron",
                }
              ],
              "properties": [
                {
                  "location":"Central",
                  "size":"50 acres",
                  "type": "rent or purchase",
                }
              ],
              "itemPrice": "0.78ETH",
              "quantity": 12,
              "currency": "ETH",
              "description": "This is a description of the item",
            }
          ],
          description: "An item can only belong to one super category either product, service or property. If it is a product, it can have multiple products, if it is a service, it can have multiple services and if it is a property, it can have multiple properties. The item price is the price of the item in the currency specified. The quantity is the number of items available for sale. The currency is the currency in which the item is sold.",
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
  replace(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemsService.replace(+id, updateItemDto);
  }

}

