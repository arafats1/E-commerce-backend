import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';

@Controller('properties')
@ApiTags('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  // @Post()
  // @ApiOperation({ summary: 'Create new property' })
  // @ApiBody({
  //   schema: {
  //     type: 'object',
  //     properties: {
  //       location: {
  //         type: 'string',
  //         example: '123 Main St, New York, NY 10001',
  //         description: 'This is the location of the property',
  //       },
  //       size: {
  //         type: 'string',
  //         example: '1000 sqft',
  //         description: 'This is the size of the property',
  //       },
  //       type: {
  //         type: 'string',
  //         example: 'Laundry',
  //         description: 'This is the type of the property',
  //       },
  //       listings: {
  //         type: 'object',
  //         example: [
  //           {
  //             "itemPrice": "1.99AGLM",
  //             "quantity": 10,
  //             "currency": "AGLM",
  //             "description": "Enter description about property here",
  //           }
  //         ],
  //         description: "This is specific information about a property",
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
  // create(@Body() createPropertyDto: CreatePropertyDto) {
  //   return this.propertiesService.create(createPropertyDto);
  // }

  @Get()
  @ApiOperation({ summary: 'Get list of all properties' })
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
    return this.propertiesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get property by id' })
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
    return this.propertiesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update property by id' })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'Should be an id of a property that exists in the database',
    required: true,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        location: {
          type: 'string',
          example: '123 Main St, New York, NY 10001',
          description: 'This is the location of the property',
        },
        size: {
          type: 'string',
          example: '1000 sqft',
          description: 'This is the size of the property',
        },
        type: {
          type: 'string',
          example: 'Laundry',
          description: 'This is the type of the property',
        },
        listings: {
          type: 'object',
          example: [
            {
              "itemPrice": "1.99AGLM",
              "quantity": 10,
              "currency": "AGLM",
              "description": "Enter description about property here",
            }
          ],
          description: "This is specific information about a property",
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
  update(@Param('id') id: string, @Body() updatePropertyDto: UpdatePropertyDto) {
    return this.propertiesService.update(+id, updatePropertyDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete property by id' })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'Should be an id of a property that exists in the database',
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
    return this.propertiesService.remove(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update property by id' })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'Should be an id of a property that exists in the database',
    required: true,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        location: {
          type: 'string',
          example: '123 Main St, New York, NY 10001',
          description: 'This is the location of the property',
        },
        size: {
          type: 'string',
          example: '1000 sqft',
          description: 'This is the size of the property',
        },
        type: {
          type: 'string',
          example: 'Laundry',
          description: 'This is the type of the property',
        },
        listings: {
          type: 'object',
          example: [
            {
              "itemPrice": "1.99AGLM",
              "quantity": 10,
              "currency": "AGLM",
              "description": "Enter description about property here",
            }
          ],
          description: "This is specific information about a property",
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
  replace(@Param('id') id: string, @Body() updatePropertyDto: UpdatePropertyDto) {
    return this.propertiesService.replace(+id, updatePropertyDto);
  }
}
