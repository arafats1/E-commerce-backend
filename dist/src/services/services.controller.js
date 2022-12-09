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
exports.ServicesController = void 0;
const common_1 = require("@nestjs/common");
const services_service_1 = require("./services.service");
const update_service_dto_1 = require("./dto/update-service.dto");
const swagger_1 = require("@nestjs/swagger");
let ServicesController = class ServicesController {
    constructor(servicesService) {
        this.servicesService = servicesService;
    }
    findAll() {
        return this.servicesService.findAll();
    }
    findOne(id) {
        return this.servicesService.findOne(+id);
    }
    update(id, updateServiceDto) {
        return this.servicesService.update(+id, updateServiceDto);
    }
    remove(id) {
        return this.servicesService.remove(+id);
    }
    replace(id, updateServiceDto) {
        return this.servicesService.replace(+id, updateServiceDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get list of all services' }),
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
], ServicesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get service by id' }),
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
], ServicesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update service by id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'Should be an id of a service that exists in the database',
        required: true,
    }),
    (0, swagger_1.ApiBody)({
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
    __metadata("design:paramtypes", [String, update_service_dto_1.UpdateServiceDto]),
    __metadata("design:returntype", void 0)
], ServicesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete service by id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'Should be an id of a service that exists in the database',
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
], ServicesController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update service by id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'Should be an id of a service that exists in the database',
        required: true,
    }),
    (0, swagger_1.ApiBody)({
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
    __metadata("design:paramtypes", [String, update_service_dto_1.UpdateServiceDto]),
    __metadata("design:returntype", void 0)
], ServicesController.prototype, "replace", null);
ServicesController = __decorate([
    (0, common_1.Controller)('services'),
    (0, swagger_1.ApiTags)('services'),
    __metadata("design:paramtypes", [services_service_1.ServicesService])
], ServicesController);
exports.ServicesController = ServicesController;
//# sourceMappingURL=services.controller.js.map