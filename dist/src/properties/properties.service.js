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
exports.PropertiesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const postNotFound_exception_1 = require("./exception/postNotFound.exception");
let PropertiesService = class PropertiesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createPropertyDto) {
    }
    findAll() {
        return this.prisma.property.findMany({ include: { propertyListing: { select: { size: true, price: true, currencies: { select: { currencyName: true } }, properties: { select: { type: true, location: true, items: { select: { name: true, category: true, brand: true, images: { select: { url: true, type: true } } } } } } } } } });
    }
    findOne(id) {
        return this.prisma.property.findUnique({ where: { id: id }, include: { propertyListing: { select: { size: true, price: true, currencies: { select: { currencyName: true } }, properties: { select: { type: true, location: true, items: { select: { name: true, category: true, brand: true, images: { select: { url: true, type: true } } } } } } } } } }).then((property) => {
            if (!property) {
                throw new postNotFound_exception_1.PostNotFoundException(id);
            }
            return property;
        });
    }
    update(id, updatePropertyDto) {
        return this.prisma.property.update({ where: { id: id }, data: updatePropertyDto });
    }
    remove(id) {
        return this.prisma.property.delete({ where: { id: id } });
    }
    replace(id, updatePropertyDto) {
        return this.prisma.property.update({ where: { id: id }, data: updatePropertyDto });
    }
};
PropertiesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PropertiesService);
exports.PropertiesService = PropertiesService;
//# sourceMappingURL=properties.service.js.map