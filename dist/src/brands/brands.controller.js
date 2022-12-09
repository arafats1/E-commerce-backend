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
exports.BrandsController = void 0;
const common_1 = require("@nestjs/common");
const brands_service_1 = require("./brands.service");
const create_brand_dto_1 = require("./dto/create-brand.dto");
const update_brand_dto_1 = require("./dto/update-brand.dto");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const create_item_dto_1 = require("../items/dto/create-item.dto");
let BrandsController = class BrandsController {
    constructor(brandsService) {
        this.brandsService = brandsService;
    }
    uploadImage(file) {
        return this.brandsService.uploadImageToCloudinary(file);
    }
    create(createBrandDto) {
        return this.brandsService.create(createBrandDto);
    }
    findAll() {
        return this.brandsService.findAll();
    }
    createItem(name, createItemDto) {
        return this.brandsService.createItem(name, createItemDto);
    }
    findOne(name) {
        return this.brandsService.findOne(name);
    }
    update(id, updateBrandDto) {
        return this.brandsService.update(+id, updateBrandDto);
    }
    findItems(name) {
        return this.brandsService.findItems(name);
    }
    remove(name) {
        return this.brandsService.remove(name);
    }
    replace(id, updateBrandDto) {
        return this.brandsService.replace(+id, updateBrandDto);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new brand' }),
    (0, swagger_1.ApiBody)({
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
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BrandsController.prototype, "uploadImage", null);
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_brand_dto_1.CreateBrandDto]),
    __metadata("design:returntype", void 0)
], BrandsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all brands' }),
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
], BrandsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(':name/item'),
    __param(0, (0, common_1.Param)('name')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_item_dto_1.CreateItemDto]),
    __metadata("design:returntype", void 0)
], BrandsController.prototype, "createItem", null);
__decorate([
    (0, common_1.Get)(':name'),
    (0, swagger_1.ApiOperation)({ summary: 'Get brand by name' }),
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
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BrandsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':name'),
    (0, swagger_1.ApiOperation)({ summary: 'Update brand by id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'Should be an id of a brand that exists in the database',
        required: true,
    }),
    (0, swagger_1.ApiBody)({
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
                    example: {
                        "url": "https://images.unsplash.com/photo-1610000000000-000000000000?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                        "resolution": "600x500",
                        "type": "brand image"
                    },
                    description: 'Image or images of the brands',
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful',
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_brand_dto_1.UpdateBrandDto]),
    __metadata("design:returntype", void 0)
], BrandsController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(':name/items'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all items by brand id' }),
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
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BrandsController.prototype, "findItems", null);
__decorate([
    (0, common_1.Delete)(':name'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete brand by id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'Should be an id of a brand that exists in the database',
        required: true,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful',
    }),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BrandsController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Add product to brand' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'Should be an id of an brand that exists in the database',
        required: true,
    }),
    (0, swagger_1.ApiBody)({
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
    }),
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
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_brand_dto_1.UpdateBrandDto]),
    __metadata("design:returntype", void 0)
], BrandsController.prototype, "replace", null);
BrandsController = __decorate([
    (0, common_1.Controller)('brands'),
    (0, swagger_1.ApiTags)('brands'),
    __metadata("design:paramtypes", [brands_service_1.BrandsService])
], BrandsController);
exports.BrandsController = BrandsController;
//# sourceMappingURL=brands.controller.js.map