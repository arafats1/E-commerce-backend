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
exports.BizInfoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let BizInfoService = class BizInfoService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createBizInfoDto) {
        let { businessName, typeOfBusiness, referredBy, taxID, registrationNo, physicalAddress, paymentDetails, images } = createBizInfoDto;
        return this.prisma.bizInfo.create({
            data: {
                businessName,
                typeOfBusiness,
                referredBy,
                taxID,
                registrationNo,
                physicalAddress: {
                    create: physicalAddress,
                },
                paymentDetails: {
                    create: {
                        bankAccounts: {
                            create: paymentDetails.bankAccounts,
                        },
                        mobileMoneyAccounts: {
                            create: paymentDetails.mobileMoneyAccounts,
                        },
                        cryptoCurrencyAccounts: {
                            create: paymentDetails.cryptoCurrencyAccounts,
                        }
                    }
                },
                images: {
                    create: images,
                }
            }
        });
    }
    createListing(id, createListingDto) {
        return this.prisma.listing.create({
            data: Object.assign(Object.assign({}, createListingDto), { bizInfo: {
                    connect: {
                        id: id
                    },
                }, productListing: {
                    create: Object.assign(Object.assign({}, createListingDto.productListing), { currencies: {
                            create: Object.assign({}, createListingDto.productListing.currencies),
                        }, products: {
                            create: Object.assign(Object.assign({}, createListingDto.productListing.products), { items: {
                                    create: Object.assign(Object.assign({}, createListingDto.productListing.products.items), { images: {
                                            create: Object.assign({}, createListingDto.productListing.products.items.images),
                                        } }),
                                } }),
                        } }),
                } })
        });
    }
    findAll() {
        return this.prisma.bizInfo.findMany({ include: { physicalAddress: { select: { country: true, city: true, postalCode: true } }, paymentDetails: { select: { bankAccounts: { select: { accountName: true, accountNumber: true, swiftCode: true, bankName: true } }, mobileMoneyAccounts: { select: { name: true, number: true } }, cryptoCurrencyAccounts: { select: { walletAddress: true, accountId: true } } } }, images: { select: { url: true, resolution: true, type: true } }, listings: { select: { description: true, productListing: { select: { color: true, size: true, quantity: true, price: true, currencies: { select: { currencyName: true } }, products: { select: { items: { select: { name: true, category: true, brand: true, images: { select: { url: true } } } } } } } }, serviceListing: { select: { price: true, currencies: { select: { currencyName: true } }, services: { select: { items: { select: { name: true, category: true, brand: true, images: { select: { url: true } } } } } } } }, propertyListing: { select: { size: true, price: true, currencies: { select: { currencyName: true } }, properties: { select: { type: true, location: true, items: { select: { name: true, category: true, brand: true, images: { select: { url: true } } } } } } } } } } } });
    }
    findOne(id) {
        return this.prisma.bizInfo.findUnique({ where: { id: id }, include: { physicalAddress: { select: { country: true, city: true, postalCode: true } }, paymentDetails: { select: { bankAccounts: { select: { accountName: true, accountNumber: true, swiftCode: true, bankName: true } }, mobileMoneyAccounts: { select: { name: true, number: true } }, cryptoCurrencyAccounts: { select: { walletAddress: true, accountId: true } } } }, images: { select: { url: true, resolution: true, type: true } }, listings: { select: { description: true, productListing: { select: { color: true, size: true, quantity: true, price: true, currencies: { select: { currencyName: true } }, products: { select: { items: { select: { name: true, category: true, brand: true, images: { select: { url: true } } } } } } } }, serviceListing: { select: { price: true, currencies: { select: { currencyName: true } }, services: { select: { items: { select: { name: true, category: true, brand: true, images: { select: { url: true } } } } } } } }, propertyListing: { select: { size: true, price: true, currencies: { select: { currencyName: true } }, properties: { select: { type: true, location: true, items: { select: { name: true, category: true, brand: true, images: { select: { url: true } } } } } } } } } } } });
    }
    update(id, updateBizInfoDto) {
        return this.prisma.bizInfo.update({
            where: { id },
            data: updateBizInfoDto,
        });
    }
    remove(id) {
        return this.prisma.bizInfo.delete({ where: { id } });
    }
};
BizInfoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BizInfoService);
exports.BizInfoService = BizInfoService;
//# sourceMappingURL=biz-info.service.js.map