import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ListingsService } from './listings.service';
import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/update-listing.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';


@Controller('listings')
@ApiTags('listings')

export class ListingsController {
  constructor(private readonly listingsService: ListingsService) {}
    

  // @Post()
  // create(@Body() createListingDto: CreateListingDto) {
  //   return this.listingsService.create(createListingDto);
  // }

  @Get()
  @ApiOperation({ summary: 'Get all listings' })
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
    description: 'Internal Server Error',
  })
  findAll() {
    return this.listingsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a listing by id' })
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
    description: 'Internal Server Error',
  })
  findOne(@Param('id') id: string) {
    return this.listingsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a listing by id' })
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
  update(@Param('id') id: string, @Body() updateListingDto: UpdateListingDto) {
    return this.listingsService.update(+id, updateListingDto);
  }

  @Put('/:id')
  @ApiOperation({ summary: 'Update a listing by id' })
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
  replace(@Param('id') id: string, @Body() updateListingDto: UpdateListingDto) {
    return this.listingsService.replace(+id, updateListingDto);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listingsService.remove(+id);
  }
}
