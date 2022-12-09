import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';

@Controller('services')
@ApiTags('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  // @Post()
  // @ApiOperation({ summary: 'Create new service' })
  // @ApiBody({
  //   schema: {
  //     type: 'object',
  //     properties: {
  //       type: {
  //         type: 'string',
  //         example: 'Laundry',
  //         description: 'This is the type of the service',
  //       },
  //       listings: {
  //         type: 'object',
  //         example: [
  //           {
  //             "itemPrice": "0.99BTC",
  //             "quantity": 3,
  //             "currency": "BTC",
  //             "description": "This is a description of the service",
  //           }
  //         ],
  //         description: "This is specific information about a service",
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
  // create(@Body() createServiceDto: CreateServiceDto) {
  //   return this.servicesService.create(createServiceDto);
  // }

  @Get()
  @ApiOperation({ summary: 'Get list of all services' })
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
    return this.servicesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get service by id' })
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
    return this.servicesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update service by id' })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'Should be an id of a service that exists in the database',
    required: true,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        type: {
          type: 'string',
          example: 'Laundry',
          description: 'This is the type of the service',
        },
        listings: {
          type: 'object',
          example: [
            {
              "itemPrice": "0.99BTC",
              "quantity": 3,
              "currency": "BTC",
              "description": "This is a description of the service",
            }
          ],
          description: "This is specific information about a service",
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
  update(@Param('id') id: string, @Body() updateServiceDto: UpdateServiceDto) {
    return this.servicesService.update(+id, updateServiceDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete service by id' })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'Should be an id of a service that exists in the database',
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
    return this.servicesService.remove(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update service by id' })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'Should be an id of a service that exists in the database',
    required: true,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        type: {
          type: 'string',
          example: 'Laundry',
          description: 'This is the type of the service',
        },
        listings: {
          type: 'object',
          example: [
            {
              "itemPrice": "0.99BTC",
              "quantity": 3,
              "currency": "BTC",
              "description": "This is a description of the service",
            }
          ],
          description: "This is specific information about a service",
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
  replace(@Param('id') id: string, @Body() updateServiceDto: UpdateServiceDto) {
    return this.servicesService.replace(+id, updateServiceDto);
  }
  
}
