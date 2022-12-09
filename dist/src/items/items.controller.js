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
exports.ItemsController = void 0;
const common_1 = require("@nestjs/common");
const items_service_1 = require("./items.service");
const create_item_dto_1 = require("./dto/create-item.dto");
const update_item_dto_1 = require("./dto/update-item.dto");
const swagger_1 = require("@nestjs/swagger");
let ItemsController = class ItemsController {
    constructor(itemsService) {
        this.itemsService = itemsService;
    }
    create(createItemDto) {
        return this.itemsService.create(createItemDto);
    }
    findAll() {
        return this.itemsService.findAll();
    }
    update(id, updateItemDto) {
        return this.itemsService.update(+id, updateItemDto);
    }
    findPopular() {
        return this.itemsService.findPopular();
    }
    findPopularInCategory(id) {
        return this.itemsService.findPopularItem(+id);
    }
    findDailyDeals() {
        return this.itemsService.findDailyDeals();
    }
    findDailyDealsInCategory(id) {
        return this.itemsService.findDailyDealsItem(+id);
    }
    remove(id) {
        return this.itemsService.remove(+id);
    }
    replace(id, updateItemDto) {
        return this.itemsService.replace(+id, updateItemDto);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Add an item' }),
    (0, swagger_1.ApiBody)({
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
                            "products": [
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
                                    "location": "Central",
                                    "size": "50 acres",
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
    (0, swagger_1.ApiTags)('items'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_item_dto_1.CreateItemDto]),
    __metadata("design:returntype", void 0)
], ItemsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiTags)('items'),
    (0, swagger_1.ApiOperation)({ summary: 'Displays all items' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful',
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
], ItemsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiTags)('items'),
    (0, swagger_1.ApiOperation)({ summary: 'Updates an item' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'Should be an id of an item that exists in the database',
        required: true,
    }),
    (0, swagger_1.ApiBody)({
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
                            "products": [
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
                                    "location": "Central",
                                    "size": "50 acres",
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
    __metadata("design:paramtypes", [String, update_item_dto_1.UpdateItemDto]),
    __metadata("design:returntype", void 0)
], ItemsController.prototype, "update", null);
__decorate([
    (0, common_1.Get)('popular'),
    (0, swagger_1.ApiTags)('items'),
    (0, swagger_1.ApiOperation)({ summary: 'Displays popular items' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful',
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
], ItemsController.prototype, "findPopular", null);
__decorate([
    (0, common_1.Get)('popular/:id'),
    (0, swagger_1.ApiTags)('items'),
    (0, swagger_1.ApiOperation)({ summary: 'Displays a popular item' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ItemsController.prototype, "findPopularInCategory", null);
__decorate([
    (0, common_1.Get)('daily-deals'),
    (0, swagger_1.ApiTags)('items'),
    (0, swagger_1.ApiOperation)({ summary: 'Displays daily deals items' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful',
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
], ItemsController.prototype, "findDailyDeals", null);
__decorate([
    (0, common_1.Get)('daily-deals/:id'),
    (0, swagger_1.ApiTags)('items'),
    (0, swagger_1.ApiOperation)({ summary: 'Displays a daily deals item' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ItemsController.prototype, "findDailyDealsInCategory", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiTags)('items'),
    (0, swagger_1.ApiOperation)({ summary: 'Deletes an item' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'Should be an id of an item that exists in the database',
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
], ItemsController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiTags)('items'),
    (0, swagger_1.ApiOperation)({ summary: 'Replaces an item' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'Should be an id of an item that exists in the database',
        required: true,
    }),
    (0, swagger_1.ApiBody)({
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
                            "products": [
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
                                    "location": "Central",
                                    "size": "50 acres",
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
    __metadata("design:paramtypes", [String, update_item_dto_1.UpdateItemDto]),
    __metadata("design:returntype", void 0)
], ItemsController.prototype, "replace", null);
ItemsController = __decorate([
    (0, common_1.Controller)('items'),
    (0, swagger_1.ApiTags)('items'),
    __metadata("design:paramtypes", [items_service_1.ItemsService])
], ItemsController);
exports.ItemsController = ItemsController;
//# sourceMappingURL=items.controller.js.map