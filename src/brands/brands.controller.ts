import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseInterceptors, UploadedFile } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags, ApiParam } from '@nestjs/swagger';
import { ParseIntPipe} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateItemDto } from 'src/items/dto/create-item.dto';




@Controller('brands')
@ApiTags('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new brand' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          example: 'Apple',
          description: 'This is a name of a brand',
        },
        images: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              url: {
                type: 'string',
                example: 'https://www.apple.com/ac/structured-data/images/open_graph_logo.png?201809210816',
                description: 'This is a url of an image',
              },
              resolution: {
                type: 'string',
                example: '1200x630',
                description: 'This is a resolution of an image',
              },
              type: {
                type: 'string',
                example: 'brand image',
                description: 'This is a type of an image',
              },
            },
          },
          description: 'Image or images of the brands',
        },
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
  @UseInterceptors(FileInterceptor('file'))
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    return this.brandsService.uploadImageToCloudinary(file);
  }
  create(@Body() createBrandDto: CreateBrandDto) {
    return this.brandsService.create(createBrandDto);
  }
    


  @Get()
  @ApiOperation({ summary: 'Get all brands' })
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
    return this.brandsService.findAll();
  }

  @Post(':name/item')
  createItem(@Param('name') name: string, @Body() createItemDto: CreateItemDto) {
    return this.brandsService.createItem(name, createItemDto);
  }
  

  @Get(':name')
  @ApiOperation({ summary: 'Get brand by name' })
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
  findOne(@Param('name') name: string) {
    return this.brandsService.findOne(name);
  }

  @Patch(':name')
  @ApiOperation({ summary: 'Update brand by id' })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'Should be an id of a brand that exists in the database',
    required: true,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          example: 'Apple',
          description: 'This is a name of a brand',
        },
        image: {
          type: 'object',
          example: 
            {
              "url": "https://images.unsplash.com/photo-1610000000000-000000000000?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              "resolution": "600x500",
              "type": "brand image"
            },
          description: 'Image or images of the brands',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Successful',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden',
  })
  update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
    return this.brandsService.update(+id, updateBrandDto);
  }

  @Get(':name/items')
  @ApiOperation({ summary: 'Get all items by brand id' })
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
  findItems(@Param('name') name: string) {
    return this.brandsService.findItems(name);
  }

  @Delete(':name')
  @ApiOperation({ summary: 'Delete brand by id' })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'Should be an id of a brand that exists in the database',
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: 'Successful',
  })
  remove(@Param('name') name: string) {
    return this.brandsService.remove(name);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Add product to brand' })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'Should be an id of an brand that exists in the database',
    required: true,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          example: 'Apple',
          description: 'This is a name of a brand',
        },
        images: {
          type: 'object',
          example: [
            {
              "url": "https://images.unsplash.com/photo-1610000000000-000000000000?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              "resolution": "600x500",
              "type": "brand image"
            },
            {
              "url": "https://images.unsplash.com/photo-1610000000000-000000000000?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              "resolution": "600x500",
              "type": "brand image"
            }
          ],
          description: 'Image or images of the brands',
        },
      },
    },
  })
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
  replace(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
    return this.brandsService.replace(+id, updateBrandDto);
  }
}
