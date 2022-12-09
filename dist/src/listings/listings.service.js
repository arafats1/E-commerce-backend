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
exports.ListingsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ListingsService = class ListingsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createListingDto) {
    }
    findAll() {
        return this.prisma.listing.findMany({ include: { productListing: { select: { color: true, size: true, quantity: true, price: true, currencies: { select: { currencyName: true } }, products: { select: { items: { select: { name: true, category: true, brand: true, images: { select: { url: true, type: true } } } } } } } }, serviceListing: { select: { price: true, currencies: { select: { currencyName: true } }, services: { select: { items: { select: { name: true, category: true, brand: true, images: { select: { url: true, type: true } } } } } } } }, propertyListing: { select: { size: true, price: true, currencies: { select: { currencyName: true } }, properties: { select: { type: true, location: true, items: { select: { name: true, category: true, brand: true, images: { select: { url: true, type: true } } } } } } } } } });
    }
    findOne(id) {
        return this.prisma.listing.findUnique({ where: { id: id }, include: { productListing: { select: { color: true, size: true, quantity: true, price: true, currencies: { select: { currencyName: true } }, products: { select: { items: { select: { name: true, category: true, brand: true, images: { select: { url: true, type: true } } } } } } } }, serviceListing: { select: { price: true, currencies: { select: { currencyName: true } }, services: { select: { items: { select: { name: true, category: true, brand: true, images: { select: { url: true, type: true } } } } } } } }, propertyListing: { select: { size: true, price: true, currencies: { select: { currencyName: true } }, properties: { select: { type: true, location: true, items: { select: { name: true, category: true, brand: true, images: { select: { url: true, type: true } } } } } } } } } });
    }
    update(id, updateListingDto) {
        return this.prisma.listing.update({ where: { id: id },
            data: {
                description: updateListingDto.description,
                productListing: {
                    create: {
                        color: updateListingDto.productListing.color,
                        size: updateListingDto.productListing.size,
                        quantity: updateListingDto.productListing.quantity,
                        price: updateListingDto.productListing.price,
                        currencies: {
                            create: {
                                currencyName: updateListingDto.productListing.currencies.currencyName
                            }
                        },
                    }
                },
                bizInfo: {
                    connect: {
                        id: updateListingDto.seller.connect.id
                    }
                }
            } });
    }
    replace(id, updateListingDto) {
        return this.prisma.listing.update({ where: { id: id },
            data: {
                description: updateListingDto.description,
                productListing: {
                    create: {
                        color: updateListingDto.productListing.color,
                        size: updateListingDto.productListing.size,
                        quantity: updateListingDto.productListing.quantity,
                        price: updateListingDto.productListing.price,
                        currencies: {
                            create: {
                                currencyName: updateListingDto.productListing.currencies.currencyName
                            }
                        },
                    }
                },
                bizInfo: {
                    connect: {
                        id: updateListingDto.seller.connect.id
                    }
                }
            } });
    }
    remove(id) {
        return this.prisma.listing.delete({
            where: { id: id },
            include: { productListing: true }
        });
    }
};
ListingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ListingsService);
exports.ListingsService = ListingsService;
//# sourceMappingURL=listings.service.js.map