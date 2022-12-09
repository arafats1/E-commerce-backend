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
exports.PropertiesController = void 0;
const common_1 = require("@nestjs/common");
const properties_service_1 = require("./properties.service");
const update_property_dto_1 = require("./dto/update-property.dto");
const swagger_1 = require("@nestjs/swagger");
let PropertiesController = class PropertiesController {
    constructor(propertiesService) {
        this.propertiesService = propertiesService;
    }
    findAll() {
        return this.propertiesService.findAll();
    }
    findOne(id) {
        return this.propertiesService.findOne(+id);
    }
    update(id, updatePropertyDto) {
        return this.propertiesService.update(+id, updatePropertyDto);
    }
    remove(id) {
        return this.propertiesService.remove(+id);
    }
    replace(id, updatePropertyDto) {
        return this.propertiesService.replace(+id, updatePropertyDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get list of all properties' }),
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
], PropertiesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get property by id' }),
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
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PropertiesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update property by id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'Should be an id of a property that exists in the database',
        required: true,
    }),
    (0, swagger_1.ApiBody)({
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
    __metadata("design:paramtypes", [String, update_property_dto_1.UpdatePropertyDto]),
    __metadata("design:returntype", void 0)
], PropertiesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete property by id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'Should be an id of a property that exists in the database',
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
], PropertiesController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update property by id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'Should be an id of a property that exists in the database',
        required: true,
    }),
    (0, swagger_1.ApiBody)({
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
    __metadata("design:paramtypes", [String, update_property_dto_1.UpdatePropertyDto]),
    __metadata("design:returntype", void 0)
], PropertiesController.prototype, "replace", null);
PropertiesController = __decorate([
    (0, common_1.Controller)('properties'),
    (0, swagger_1.ApiTags)('properties'),
    __metadata("design:paramtypes", [properties_service_1.PropertiesService])
], PropertiesController);
exports.PropertiesController = PropertiesController;
//# sourceMappingURL=properties.controller.js.map