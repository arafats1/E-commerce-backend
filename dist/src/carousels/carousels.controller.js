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
exports.CarouselsController = void 0;
const common_1 = require("@nestjs/common");
const carousels_service_1 = require("./carousels.service");
const create_carousel_dto_1 = require("./dto/create-carousel.dto");
const update_carousel_dto_1 = require("./dto/update-carousel.dto");
const swagger_1 = require("@nestjs/swagger");
let CarouselsController = class CarouselsController {
    constructor(carouselsService) {
        this.carouselsService = carouselsService;
    }
    create(createCarouselDto) {
        return this.carouselsService.create(createCarouselDto);
    }
    findAll() {
        return this.carouselsService.findAll();
    }
    findOne(id) {
        return this.carouselsService.findOne(+id);
    }
    update(id, updateCarouselDto) {
        return this.carouselsService.update(+id, updateCarouselDto);
    }
    remove(id) {
        return this.carouselsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new carousel' }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                images: {
                    type: 'object',
                    example: {
                        "url": "https://res.cloudinary.com/dknnf52ij/image/upload/v1663770622/agalm/Carousel/second-image_cl8cll.png",
                        "resolution": "600x500",
                        "type": "carousel image"
                    },
                    description: 'Background Image on the carousel',
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'New carousel has been successfully created',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'New carousel created',
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
    __metadata("design:paramtypes", [create_carousel_dto_1.CreateCarouselDto]),
    __metadata("design:returntype", void 0)
], CarouselsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all carousels' }),
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
], CarouselsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a carousel by id' }),
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
], CarouselsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a carousel by id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Carousel id',
        type: 'string',
        required: true,
    }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                images: {
                    type: 'object',
                    example: {
                        "url": "https://res.cloudinary.com/dknnf52ij/image/upload/v1663770622/agalm/Carousel/second-image_cl8cll.png",
                        "resolution": "600x500",
                        "type": "carousel image"
                    },
                    description: 'Background Image on the carousel',
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
    __metadata("design:paramtypes", [String, update_carousel_dto_1.UpdateCarouselDto]),
    __metadata("design:returntype", void 0)
], CarouselsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Carousel id',
        type: 'string',
        required: true,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarouselsController.prototype, "remove", null);
CarouselsController = __decorate([
    (0, common_1.Controller)('carousels'),
    (0, swagger_1.ApiTags)('carousels'),
    __metadata("design:paramtypes", [carousels_service_1.CarouselsService])
], CarouselsController);
exports.CarouselsController = CarouselsController;
//# sourceMappingURL=carousels.controller.js.map