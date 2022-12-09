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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SellersService = class SellersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createSellerDto) {
        return 'This action adds a new seller';
    }
    findAll() {
        return this.prisma.seller.findMany({ include: { user: { select: { firstName: true, lastName: true, dateOfBirth: true, nationality: true, physicalAddress: { select: { country: true, city: true, postalCode: true } } } }, bizInfo: { select: { businessName: true, typeOfBusiness: true } } } });
    }
    findOne(id) {
        return this.prisma.seller.findUnique({ where: { id }, include: { user: { select: { firstName: true, lastName: true, dateOfBirth: true, nationality: true, physicalAddress: { select: { country: true, city: true, postalCode: true } } } }, bizInfo: { select: { businessName: true, typeOfBusiness: true, registrationNo: true } }, signUp: { select: { email: true, phone: true } }, } });
    }
    update(id, updateSellerDto) {
        return this.prisma.seller.update({
            where: { id },
            data: {}
        });
    }
    remove(id) {
        return `This action removes a #${id} seller`;
    }
};
SellersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SellersService);
exports.SellersService = SellersService;
//# sourceMappingURL=sellers.service.js.map