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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const postNotFound_exception_1 = require("./exception/postNotFound.exception");
let ProductsService = class ProductsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createProductDto) {
    }
    findAll() {
        return this.prisma.product.findMany({ include: { productListing: { select: { color: true, size: true, quantity: true, price: true, currencies: { select: { currencyName: true } }, products: { select: { items: { select: { name: true, category: true, brand: true, images: { select: { url: true, type: true } } } } } } } } } });
    }
    findOne(id) {
        return this.prisma.product.findUnique({ where: { id: id }, include: { productListing: { select: { color: true, size: true, quantity: true, price: true, currencies: { select: { currencyName: true } }, products: { select: { items: { select: { name: true, category: true, brand: true, images: { select: { url: true, type: true } } } } } } } } } }).then((product) => {
            if (!product) {
                throw new postNotFound_exception_1.PostNotFoundException(id);
            }
            return product;
        });
    }
    update(id, updateProductDto) {
        return this.prisma.product.findUnique({ where: { id: id }, });
    }
    remove(id) {
        return this.prisma.product.findUnique({ where: { id: id }, }).then((product) => {
            if (!product) {
                throw new postNotFound_exception_1.PostNotFoundException(id);
            }
            return this.prisma.product.delete({ where: { id: id } });
        });
    }
    replace(id, updateProductDto) {
        return this.prisma.product.findUnique({ where: { id: id }, });
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map