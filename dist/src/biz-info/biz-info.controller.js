"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BizInfoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_listing_dto_1 = require("../listings/dto/create-listing.dto");
const biz_info_service_1 = require("./biz-info.service");
const create_biz_info_dto_1 = require("./dto/create-biz-info.dto");
const update_biz_info_dto_1 = require("./dto/update-biz-info.dto");
let BizInfoController = class BizInfoController {
    constructor(bizInfoService) {
        this.bizInfoService = bizInfoService;
    }
    create(createBizInfoDto) {
        return this.bizInfoService.create(createBizInfoDto);
    }
    createListing(id, createListingDto) {
        return this.bizInfoService.createListing(+id, createListingDto);
    }
    findAll() {
        return this.bizInfoService.findAll();
    }
    findSellerSummary(id) {
        return this.bizInfoService.findOne(+id);
    }
    update(id, updateBizInfoDto) {
        return this.bizInfoService.update(+id, updateBizInfoDto);
    }
    updateAll(id, updateBizInfoDto) {
        return this.bizInfoService.update(+id, updateBizInfoDto);
    }
    remove(id) {
        return this.bizInfoService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)('shops'),
    (0, swagger_1.ApiOperation)({ summary: 'Create new shop' }),
    (0, swagger_1.ApiBody)({
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
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Created',
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Unauthorized',
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden',
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal server error',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_biz_info_dto_1.CreateBizInfoDto]),
    __metadata("design:returntype", void 0)
], BizInfoController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('shops/:id/listings'),
    (0, swagger_1.ApiOperation)({ summary: 'Create new listing' }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                description: {
                    type: 'string',
                    example: 'This is a description',
                    description: 'The description of the listing',
                },
                productListing: {
                    type: 'object',
                    properties: {
                        color: {
                            type: 'string',
                            example: 'Red',
                            description: 'The color of the product',
                        },
                        size: {
                            type: 'string',
                            example: 'Small',
                            description: 'The size of the product',
                        },
                        quantity: {
                            type: 'number',
                            example: 76,
                            description: 'The quantity of the product',
                        },
                        price: {
                            type: 'float',
                            example: 0.0025,
                            description: 'The price of the product',
                        },
                        currencies: {
                            type: 'object',
                            properties: {
                                currencyName: {
                                    type: 'string',
                                    example: 'Bitcoin',
                                    description: 'The name of the currency',
                                },
                            },
                        },
                        products: {
                            type: 'object',
                            properties: {
                                items: {
                                    type: 'object',
                                    properties: {
                                        name: {
                                            type: 'string',
                                            example: 'Shoes',
                                            description: 'The name of the product',
                                        },
                                        popular: {
                                            type: 'boolean',
                                            example: true,
                                            description: 'Whether the product is popular or not',
                                        },
                                        dailyDeals: {
                                            type: 'boolean',
                                            example: true,
                                            description: 'Whether the product is on daily deals or not',
                                        },
                                        categoryName: {
                                            type: 'string',
                                            example: 'Shoes',
                                            description: 'The name of the category',
                                        },
                                        brandName: {
                                            type: 'string',
                                            example: 'Nike',
                                            description: 'The name of the brand',
                                        },
                                        images: {
                                            type: 'object',
                                            properties: {
                                                url: {
                                                    type: 'string',
                                                    example: 'https://www.google.com/image',
                                                    description: 'The url of the image',
                                                },
                                                resolution: {
                                                    type: 'string',
                                                    example: '300x300',
                                                    description: 'The resolution of the image',
                                                },
                                                type: {
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
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Created',
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Unauthorized',
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden',
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal server error',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_listing_dto_1.CreateListingDto]),
    __metadata("design:returntype", void 0)
], BizInfoController.prototype, "createListing", null);
__decorate([
    (0, common_1.Get)('shops'),
    (0, swagger_1.ApiOperation)({ summary: 'Get list of all shops' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Created',
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Unauthorized',
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden',
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal server error',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BizInfoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('shops/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get shop by id' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Created',
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Unauthorized',
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden',
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal server error',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BizInfoController.prototype, "findSellerSummary", null);
__decorate([
    (0, common_1.Patch)('shops/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update specific shop details' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'Should be an id of a shop that exists in the database',
        required: true,
    }),
    (0, swagger_1.ApiBody)({
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
                    example: {
                        "country": "Uganda",
                        "city": "Mbarara",
                        "postalCode": "234-789"
                    },
                    description: 'Location of the business'
                },
                paymentDetails: {
                    type: 'object',
                    example: {
                        "bankAccounts": {
                            "accountName": "Kaguta Museveni",
                            "accountNumber": "987 0987 00096543",
                            "bankName": "Bank of Africa",
                            "swiftCode": "123 789"
                        },
                        "mobileMoneyAccounts": {
                            "name": "Kaguta Museveni",
                            "number": "0987 000965",
                        },
                        "cryptoCurrencyAccounts": {
                            "walletAddress": "0xxxxiuthw5739dhd9",
                            "accountId": "0987 000965",
                        },
                    },
                    description: 'A business can have one or more payment details'
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Created',
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Unauthorized',
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden',
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal server error',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_biz_info_dto_1.UpdateBizInfoDto]),
    __metadata("design:returntype", void 0)
], BizInfoController.prototype, "update", null);
__decorate([
    (0, common_1.Put)('shops/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update entire shop' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'Should be an id of a shop that exists in the database',
        required: true,
    }),
    (0, swagger_1.ApiBody)({
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
                            "country": "Uganda",
                            "city": "Mbarara",
                            "postalCode": "234-789"
                        }
                    ],
                    description: 'Location of the business'
                },
                paymentDetails: {
                    type: 'object',
                    example: [
                        {
                            "bankAccounts": [
                                {
                                    "accountName": "Kaguta Museveni",
                                    "accountNumber": "987 0987 00096543",
                                    "bankName": "Bank of Africa",
                                    "swiftCode": "123 789"
                                }
                            ],
                            "mobileMoneyAccounts": [
                                {
                                    "name": "Kaguta Museveni",
                                    "number": "0987 000965",
                                }
                            ],
                            "cryptoCurrencyAccounts": [
                                {
                                    "walletAddress": "0xxxxiuthw5739dhd9",
                                    "accountId": "0987 000965",
                                }
                            ],
                        }
                    ],
                    description: 'A business can have one or more payment details'
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Created',
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Unauthorized',
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden',
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal server error',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_biz_info_dto_1.UpdateBizInfoDto]),
    __metadata("design:returntype", void 0)
], BizInfoController.prototype, "updateAll", null);
__decorate([
    (0, common_1.Delete)('shops/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete shop' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'Should be an id of a shop that exists in the database',
        required: true,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful',
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Unauthorized',
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden',
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal server error',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BizInfoController.prototype, "remove", null);
BizInfoController = __decorate([
    (0, common_1.Controller)(''),
    (0, swagger_1.ApiTags)('Shops'),
    __metadata("design:paramtypes", [biz_info_service_1.BizInfoService])
], BizInfoController);
exports.BizInfoController = BizInfoController;
//# sourceMappingURL=biz-info.controller.js.map