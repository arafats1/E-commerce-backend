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
exports.ItemsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ItemsService = class ItemsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createItemDto) {
        let { name, popular, dailyDeals, brand, images, category, } = createItemDto;
        return this.prisma.item.create({ data: { name, popular, dailyDeals, brand, category,
                images: { create: images },
            } });
    }
    findAll() {
        return this.prisma.item.findMany({ include: { product: { select: { productListing: { select: { color: true, size: true, quantity: true, price: true, currencies: { select: { currencyName: true } } } } } }, service: { select: { serviceListing: { select: { price: true, currencies: { select: { currencyName: true } } } } } }, property: { select: { propertyListing: { select: { size: true, price: true, currencies: { select: { currencyName: true } } } } } }, images: { select: { url: true, resolution: true, type: true } }, } });
    }
    findPopular() {
        return this.prisma.item.findMany({ where: { popular: true }, include: { product: { select: { productListing: { select: { color: true, size: true, quantity: true, price: true, currencies: { select: { currencyName: true } } } } } }, service: { select: { serviceListing: { select: { price: true, currencies: { select: { currencyName: true } } } } } }, property: { select: { propertyListing: { select: { size: true, price: true, currencies: { select: { currencyName: true } } } } } }, images: { select: { url: true, resolution: true, type: true } }, } });
    }
    findPopularItem(id) {
        return this.prisma.item.findUnique({ where: { id: id }, include: { product: { select: { productListing: { select: { color: true, size: true, quantity: true, price: true, currencies: { select: { currencyName: true } } } } } }, service: { select: { serviceListing: { select: { price: true, currencies: { select: { currencyName: true } } } } } }, property: { select: { propertyListing: { select: { size: true, price: true, currencies: { select: { currencyName: true } } } } } }, images: { select: { url: true, resolution: true, type: true } }, } });
    }
    findDailyDeals() {
        return this.prisma.item.findMany({ where: { dailyDeals: true }, include: { product: { select: { productListing: { select: { color: true, size: true, quantity: true, price: true, currencies: { select: { currencyName: true } } } } } }, service: { select: { serviceListing: { select: { price: true, currencies: { select: { currencyName: true } } } } } }, property: { select: { propertyListing: { select: { size: true, price: true, currencies: { select: { currencyName: true } } } } } }, images: { select: { url: true, resolution: true, type: true } }, } });
    }
    findDailyDealsItem(id) {
        return this.prisma.item.findUnique({ where: { id: id }, include: { product: { select: { productListing: { select: { color: true, size: true, quantity: true, price: true, currencies: { select: { currencyName: true } } } } } }, service: { select: { serviceListing: { select: { price: true, currencies: { select: { currencyName: true } } } } } }, property: { select: { propertyListing: { select: { size: true, price: true, currencies: { select: { currencyName: true } } } } } }, images: { select: { url: true, resolution: true, type: true } }, } });
    }
    update(id, updateItemDto) {
        return this.prisma.item.findUnique({ where: { id: id }, include: { images: { select: { url: true, resolution: true, type: true } }, } });
    }
    remove(id) {
        return this.prisma.item.findUnique({ where: { id: id }, include: { images: { select: { url: true, resolution: true, type: true } }, } });
    }
    replace(id, updateItemDto) {
        return this.prisma.item.findUnique({ where: { id: id }, include: { images: { select: { url: true, resolution: true, type: true } }, } });
    }
};
ItemsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ItemsService);
exports.ItemsService = ItemsService;
//# sourceMappingURL=items.service.js.map