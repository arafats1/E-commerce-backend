import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarouselsService } from './carousels.service';
import { CreateCarouselDto } from './dto/create-carousel.dto';
import { UpdateCarouselDto } from './dto/update-carousel.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('carousels')
@ApiTags('carousels')
export class CarouselsController {
  constructor(private readonly carouselsService: CarouselsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new carousel' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        images: {
          type: 'object',
          example:
            {
              "url": "https://res.cloudinary.com/dknnf52ij/image/upload/v1663770622/agalm/Carousel/second-image_cl8cll.png",
              "resolution": "600x500",
              "type": "carousel image"
            },
          description: 'Background Image on the carousel',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'New carousel has been successfully created',
  })
  @ApiResponse({
    status: 201,
    description: 'New carousel created',
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
  create(@Body() createCarouselDto: CreateCarouselDto) {
    return this.carouselsService.create(createCarouselDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all carousels' })
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
    return this.carouselsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a carousel by id' })
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
    return this.carouselsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a carousel by id' })
  @ApiParam({
    name: 'id',
    description: 'Carousel id',
    type: 'string',
    required: true,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        images: {
          type: 'object',
          example:
            {
              "url": "https://res.cloudinary.com/dknnf52ij/image/upload/v1663770622/agalm/Carousel/second-image_cl8cll.png",
              "resolution": "600x500",
              "type": "carousel image"
            },
          description: 'Background Image on the carousel',
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
  update(@Param('id') id: string, @Body() updateCarouselDto: UpdateCarouselDto) {
    return this.carouselsService.update(+id, updateCarouselDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    description: 'Carousel id',
    type: 'string',
    required: true,
  })
  remove(@Param('id') id: string) {
    return this.carouselsService.remove(+id);
  }

  
}
