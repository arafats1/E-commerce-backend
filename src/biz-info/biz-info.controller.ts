import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { CreateListingDto } from 'src/listings/dto/create-listing.dto';
import { BizInfoService } from './biz-info.service';
import { CreateBizInfoDto } from './dto/create-biz-info.dto';
import { UpdateBizInfoDto } from './dto/update-biz-info.dto';

@Controller('')
@ApiTags('Shops')
export class BizInfoController {
  constructor(private readonly bizInfoService: BizInfoService) {}

  @Post('shops')
  @ApiOperation({ summary: 'Create new shop' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        businessName: {
          type: 'string',
          example: 'Kampala Traders',
        },
        typeOfBusiness: {
          type: 'string',
          example: 'Retail',
        },
        referredBy: {
          type: 'string',
          example: 'musoke@gmail.com',
        },
        taxID: {
          type: 'string',
          example: '1345',
        },
        registrationNo: {
          type: 'string',
          example: '123456789',
        },
        physicalAddress: {
          type: 'object',
          properties: {
            country: {
              type: 'string',
              example: 'Uganda',
            },
            city: {
              type: 'string',
              example: 'Kampala',
            },
            postalCode: {
              type: 'string',
              example: '1234',
            }
          }
        },
        paymentDetails: {
          type: 'object',
          properties: {
            bankAccounts: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  accountName: {
                    type: 'string',
                    example: 'Kampala Traders',
                  },
                  accountNumber: {
                    type: 'string',
                    example: '123456789',
                  },
                  bankName: {
                    type: 'string',
                    example: 'Stanbic Bank',
                  },
                  swiftCode: {
                    type: 'string',
                    example: 'SB 988T',
                  },
                }
              }
            },
            mobileMoneyAccounts: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  name: {
                    type: 'string',
                    example: 'Kampala Traders',
                  },
                  number: {
                    type: 'string',
                    example: '070035666',
                  },
                }
              },
            },
            cryptoCurrencyAccounts: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  walletAddress: {
                    type: 'string',
                    example: '0x123456789',
                  },
                  accountId: {
                    type: 'string',
                    example: '3',
                  },
                }
              }
            },
          }
        },
        images: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              url: {
                type: 'string',
                example: 'https://www.google.com',
              },
              resolution: {
                type: 'string',
                example: '300x300',
              },
              type: {
                type: 'string',
                example: 'logo',
              },
            }
          }
        },
      }
    }
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
  create(@Body() createBizInfoDto: CreateBizInfoDto) {
    return this.bizInfoService.create(createBizInfoDto);
  }

  @Post('shops/:id/listings')
  @ApiOperation({ summary: 'Create new listing' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        description : {
          type: 'string',
          example: 'This is a description',
          description: 'The description of the listing',
        },
        productListing: {
          type: 'object',
          properties: {
            color : {
              type: 'string',
              example: 'Red',
              description: 'The color of the product',
            },
            size : {
              type: 'string',
              example: 'Small',
              description: 'The size of the product',
            },
            quantity : {
              type: 'number',
              example: 76,
              description: 'The quantity of the product',
            },
            price : {
              type: 'float',
              example: 0.0025,
              description: 'The price of the product',
            },
            currencies : {
              type: 'object',
              properties: {
                currencyName : {
                  type: 'string',
                  example: 'Bitcoin',
                  description: 'The name of the currency',
                },
              },
            },
            products : {
              type: 'object',
              properties: {
                  items: {
                    type: 'object',
                    properties: {
                      name : {
                        type: 'string',
                        example: 'Shoes',
                        description: 'The name of the product',
                      },
                      popular : {
                        type: 'boolean',
                        example: true,
                        description: 'Whether the product is popular or not',
                      },
                      dailyDeals : {
                        type: 'boolean',
                        example: true,
                        description: 'Whether the product is on daily deals or not',
                      },
                      categoryName : {
                        type: 'string',
                        example: 'Shoes',
                        description: 'The name of the category',
                      },
                      brandName : {
                        type: 'string',
                        example: 'Nike',
                        description: 'The name of the brand',
                      },
                      images : {
                        type: 'object',
                        properties: {
                          url : {
                            type: 'string',
                            example: 'https://www.google.com/image',
                            description: 'The url of the image',
                          },
                          resolution : {
                            type: 'string',
                            example: '300x300',
                            description: 'The resolution of the image',
                          },
                          type : {
                            type: 'string',
                            example: 'Product Image',
                            description: 'The type of the image',
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
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
  createListing(@Param('id') id: string, @Body() createListingDto: CreateListingDto) {
    return this.bizInfoService.createListing(+id, createListingDto);
  }

  @Get('shops')
  @ApiOperation({ summary: 'Get list of all shops' })
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
  findAll() {
    return this.bizInfoService.findAll();
  }

  @Get('shops/:id')
  @ApiOperation({ summary: 'Get shop by id' })
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
  findSellerSummary(@Param('id') id: string) {
    return this.bizInfoService.findOne(+id);
  }

  @Patch('shops/:id')
  @ApiOperation({ summary: 'Update specific shop details' })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'Should be an id of a shop that exists in the database',
    required: true,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        businessName: {
          type: 'string',
          example: 'Kaguta Laudromat',
          description: 'This is the name of the business',
        },
        typeOfBusiness: {
          type: 'string',
          example: 'Individual Business',
          description: 'This specifies whether the business is owned by a group or individual',
        },
        referredBy: {
          type: 'string',
          example: 'Arafat Magezi',
          description: 'Who referred you to Agalm?',
        },
        taxID: {
          type: 'string',
          example: '984-1560',
          description: 'Tax identification number',
        },
        registrationNo: {
          type: 'string',
          example: '987609872',
          description: 'Business registration number',
        },
        images: {
          type: 'object',
          example: [
            {
              "url": "https://images.unsplash.com/photo-1610000000000-000000000000?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              "resolution": "600x500",
              "type": "business image"
            },
            {
              "url": "https://images.unsplash.com/photo-1610000000000-000000000000?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              "resolution": "600x500",
              "type": "ID image"
            }
          ],

          
          description: 'Images as required in business registration',
        },
        physicalAdress: {
          type: 'object',
          example: 
            {
              "country":"Uganda",
              "city":"Mbarara",
              "postalCode": "234-789"
            },
          description: 'Location of the business'
        },

        paymentDetails: {
          type: 'object',
          example: 
            {
              "bankAccounts":
                {
                  "accountName":"Kaguta Museveni",
                  "accountNumber":"987 0987 00096543",
                  "bankName":"Bank of Africa",
                  "swiftCode":"123 789"
                }
              ,
              "mobileMoneyAccounts":
                {
                  "name":"Kaguta Museveni",
                  "number":"0987 000965",
                }
              ,
              "cryptoCurrencyAccounts":
                {
                  "walletAddress":"0xxxxiuthw5739dhd9",
                  "accountId":"0987 000965",
                }
              ,
            }
          ,
          description: 'A business can have one or more payment details'
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
  update(@Param('id') id: string, @Body() updateBizInfoDto: UpdateBizInfoDto) {
    return this.bizInfoService.update(+id, updateBizInfoDto);
  }

  @Put('shops/:id')
  @ApiOperation({ summary: 'Update entire shop' })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'Should be an id of a shop that exists in the database',
    required: true,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        businessName: {
          type: 'string',
          example: 'Kaguta Laudromat',
          description: 'This is the name of the business',
        },
        typeOfBusiness: {
          type: 'string',
          example: 'Individual Business',
          description: 'This specifies whether the business is owned by a group or individual',
        },
        referredBy: {
          type: 'string',
          example: 'Arafat Magezi',
          description: 'Who referred you to Agalm?',
        },
        taxID: {
          type: 'string',
          example: '984-1560',
          description: 'Tax identification number',
        },
        registrationNo: {
          type: 'string',
          example: '987609872',
          description: 'Business registration number',
        },
        images: {
          type: 'object',
          example: [
            {
              "url": "https://images.unsplash.com/photo-1610000000000-000000000000?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              "resolution": "600x500",
              "type": "business image"
            },
            {
              "url": "https://images.unsplash.com/photo-1610000000000-000000000000?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              "resolution": "600x500",
              "type": "ID image"
            }
          ],
          description: 'Images as required in business registration',
        },
        physicalAdress: {
          type: 'object',
          example: [
            {
              "country":"Uganda",
              "city":"Mbarara",
              "postalCode": "234-789"
            }
          ],
          description: 'Location of the business'
        },
        paymentDetails: {
          type: 'object',
          example: [
            {
              "bankAccounts":[
                {
                  "accountName":"Kaguta Museveni",
                  "accountNumber":"987 0987 00096543",
                  "bankName":"Bank of Africa",
                  "swiftCode":"123 789"
                }
              ],
              "mobileMoneyAccounts":[
                {
                  "name":"Kaguta Museveni",
                  "number":"0987 000965",
                }
              ],
              "cryptoCurrencyAccounts":[
                {
                  "walletAddress":"0xxxxiuthw5739dhd9",
                  "accountId":"0987 000965",
                }
              ],
            }
          ],
          description: 'A business can have one or more payment details'
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
  updateAll(@Param('id') id: string, @Body() updateBizInfoDto: UpdateBizInfoDto) {
    return this.bizInfoService.update(+id, updateBizInfoDto);
  }

  @Delete('shops/:id')
  @ApiOperation({ summary: 'Delete shop' })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'Should be an id of a shop that exists in the database',
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
    return this.bizInfoService.remove(+id);
  }
}
