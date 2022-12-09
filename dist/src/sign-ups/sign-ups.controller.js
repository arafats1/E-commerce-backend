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
exports.SignUpsController = void 0;
const common_1 = require("@nestjs/common");
const sign_ups_service_1 = require("./sign-ups.service");
const update_sign_up_dto_1 = require("./dto/update-sign-up.dto");
const swagger_1 = require("@nestjs/swagger");
const create_user_dto_1 = require("../users/dto/create-user.dto");
const sign_up_entity_1 = require("./entities/sign-up.entity");
let SignUpsController = class SignUpsController {
    constructor(signUpsService) {
        this.signUpsService = signUpsService;
    }
    async findAll() {
        const signUps = await this.signUpsService.findAll();
        return signUps.map((signUp) => new sign_up_entity_1.SignUpEntity(signUp));
    }
    async findDashboard(id) {
        return new sign_up_entity_1.SignUpEntity(await this.signUpsService.findOne(+id));
    }
    createKyc(id, createUserDto) {
        return this.signUpsService.createKyc(+id, createUserDto);
    }
    update(id, updateSignUpDto) {
        return this.signUpsService.update(+id, updateSignUpDto);
    }
    remove(id) {
        return this.signUpsService.remove(+id);
    }
};
__decorate([
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.Get)('users'),
    (0, swagger_1.ApiOperation)({ summary: 'Displays all users of the system' }),
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
    __metadata("design:returntype", Promise)
], SignUpsController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.Get)('users/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get user by id' }),
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
    __metadata("design:returntype", Promise)
], SignUpsController.prototype, "findDashboard", null);
__decorate([
    (0, common_1.Post)('users/:id/kyc'),
    (0, swagger_1.ApiOperation)({ summary: 'Creates kyc for user' }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                firstName: {
                    type: 'string',
                    example: 'John',
                },
                lastName: {
                    type: 'string',
                    example: 'Doe',
                },
                dateOfBirth: {
                    type: 'string',
                    example: '01/01/1990',
                    description: 'This is the date of birth of the user',
                },
                nationality: {
                    type: 'string',
                    example: 'Ugandan',
                    description: 'The user nationality'
                },
                areaOfResidence: {
                    type: 'string',
                    example: 'Kampala',
                    description: 'The area of residence of the user',
                },
                physicalAddress: {
                    type: 'object',
                    example: {
                        country: 'Uganda',
                        city: 'Kampala',
                        postalCode: '256'
                    }
                },
                identificationDetails: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            idType: {
                                type: 'string',
                                example: 'National ID',
                                description: 'The type of identification document',
                            },
                            images: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        url: {
                                            type: 'string',
                                            example: 'https://www.google.com',
                                            description: 'The url of the image',
                                        },
                                        type: {
                                            type: 'string',
                                            example: 'front view of the ID',
                                            description: 'The type of the image',
                                        },
                                        resolution: {
                                            type: 'string',
                                            example: '300x300',
                                            description: 'The resolution of the image',
                                        },
                                    },
                                    description: 'The images of the identification document ie front and back and the facial recognition image of the user',
                                },
                            },
                        },
                    },
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
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], SignUpsController.prototype, "createKyc", null);
__decorate([
    (0, common_1.Patch)('users/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update specific user information' }),
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
    __metadata("design:paramtypes", [String, update_sign_up_dto_1.UpdateSignUpDto]),
    __metadata("design:returntype", void 0)
], SignUpsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('users/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete specific user' }),
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
], SignUpsController.prototype, "remove", null);
SignUpsController = __decorate([
    (0, common_1.Controller)(''),
    (0, swagger_1.ApiTags)('Users'),
    __metadata("design:paramtypes", [sign_ups_service_1.SignUpsService])
], SignUpsController);
exports.SignUpsController = SignUpsController;
//# sourceMappingURL=sign-ups.controller.js.map