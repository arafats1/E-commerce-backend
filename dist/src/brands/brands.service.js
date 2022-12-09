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
exports.BrandsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const postNotFound_exception_1 = require("./exception/postNotFound.exception");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
let BrandsService = class BrandsService {
    constructor(prisma, cloudinary) {
        this.prisma = prisma;
        this.cloudinary = cloudinary;
    }
    async uploadImageToCloudinary(file) {
        const result = await this.cloudinary.uploadImage(file);
        if (result.error) {
            throw new common_1.BadRequestException(result.error.message);
        }
        return this.prisma.image.create({ data: { url: result.url, resolution: result.format, type: result.type } });
    }
    create(createBrandDto) {
        let { name, images } = createBrandDto;
        return this.prisma.brand.create({ data: { name, images: { create: images } } });
    }
    createItem(name, createItemDto) {
        return this.prisma.item.create({
            data: Object.assign(Object.assign({}, createItemDto), { brand: {
                    connect: {
                        name: name
                    },
                }, images: {
                    create: createItemDto.images
                } })
        });
    }
    findAll() {
        return this.prisma.brand.findMany({ include: { images: { select: { url: true, resolution: true, type: true } } } });
    }
    findItems(name) {
        return this.prisma.brand.findMany({ where: { name: name }, include: { items: { select: { name: true, product: { select: { productListing: { select: { price: true, color: true, size: true } } } } } } } });
    }
    findOne(name) {
        return this.prisma.brand.findUnique({ where: { name }, include: { images: { select: { url: true, resolution: true, type: true } } } }).then((brand) => {
            if (!brand) {
                throw new postNotFound_exception_1.PostNotFoundException(name);
            }
            return brand;
        });
    }
    update(id, updateBrandDto) {
        return this.prisma.brand.update({
            where: { id },
            data: {
                name: updateBrandDto.name,
                images: {
                    connect: {
                        id: updateBrandDto.image.id
                    },
                    create: {
                        url: updateBrandDto.image.url,
                        resolution: updateBrandDto.image.resolution,
                        type: updateBrandDto.image.type,
                    }
                }
            }
        });
    }
    remove(name) {
        return this.prisma.brand.delete({ where: { name } }).then((brand) => {
            if (!brand) {
                throw new postNotFound_exception_1.PostNotFoundException(name);
            }
            return brand;
        });
    }
    replace(id, updateBrandDto) {
        return this.prisma.brand.update({
            where: { id },
            data: {
                name: updateBrandDto.name
            }
        });
    }
};
BrandsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, cloudinary_service_1.CloudinaryService])
], BrandsService);
exports.BrandsService = BrandsService;
//# sourceMappingURL=brands.service.js.map