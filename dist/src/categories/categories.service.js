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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const postNotFound_exception_1 = require("./exception/postNotFound.exception");
let CategoriesService = class CategoriesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createCategoryDto) {
        return this.prisma.category.create({
            data: {
                name: createCategoryDto.name,
                images: {
                    create: {
                        url: createCategoryDto.images.url,
                        resolution: createCategoryDto.images.resolution,
                        type: createCategoryDto.images.type,
                    }
                }
            }
        });
    }
    createItem(name, createItemDto) {
        return this.prisma.item.create({
            data: Object.assign(Object.assign({}, createItemDto), { category: {
                    connect: {
                        name: name
                    },
                }, images: {
                    create: createItemDto.images
                } })
        });
    }
    findAll() {
        return this.prisma.category.findMany({ include: { images: { select: { url: true, resolution: true, type: true } } } });
    }
    findItems(name) {
        return this.prisma.category.findMany({ where: { name: name }, include: { items: { select: { name: true, } } } });
    }
    findByName(name) {
        return this.prisma.category.findUnique({ where: { name: name }, include: { images: { select: { url: true, resolution: true, type: true } } } });
    }
    update(id, updateCategoryDto) {
        return this.prisma.category.update({
            where: { id },
            data: {
                name: updateCategoryDto.name,
            }
        });
    }
    replace(id, updateCategoryDto) {
        return this.prisma.category.update({
            where: { id },
            data: {
                name: updateCategoryDto.name,
            }
        });
    }
    remove(name) {
        return this.prisma.category.delete({ where: { name: name } }).then((category) => {
            if (!category) {
                throw new postNotFound_exception_1.PostNotFoundException(name);
            }
            return category;
        });
    }
};
CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map