import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SellersService } from './sellers.service';
import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateListingDto } from 'src/listings/dto/create-listing.dto';

@Controller('sellers')
@ApiTags('sellers')
export class SellersController {
  constructor(private readonly sellersService: SellersService) {}

  // @Post()
  // @ApiOperation({ summary: 'Create a new seller' })
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
  // create(@Body() createSellerDto: CreateSellerDto) {
  //   return this.sellersService.create(createSellerDto);
  // }

  @Get()
  @ApiOperation({ summary: 'Get list of all sellers' })
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
    return this.sellersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get seller by id' })
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
    return this.sellersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update specific seller detail' })
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
  update(@Param('id') id: string, @Body() updateSellerDto: UpdateSellerDto) {
    return this.sellersService.update(+id, updateSellerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete seller' })
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
  remove(@Param('id') id: string) {
    return this.sellersService.remove(+id);
  }
}
