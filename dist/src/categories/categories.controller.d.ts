import { CreateItemDto } from 'src/items/dto/create-item.dto';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    create(createCategoryDto: CreateCategoryDto): import(".prisma/client").Prisma.Prisma__CategoryClient<import(".prisma/client").Category, never>;
    createItem(name: string, createItemDto: CreateItemDto): import(".prisma/client").Prisma.Prisma__ItemClient<import(".prisma/client").Item, never>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Category & {
        images: {
            url: string;
            resolution: string;
            type: string;
        }[];
    })[]>;
    findByName(name: string): import(".prisma/client").Prisma.Prisma__CategoryClient<import(".prisma/client").Category & {
        images: {
            url: string;
            resolution: string;
            type: string;
        }[];
    }, never>;
    findItems(name: string): import(".prisma/client").PrismaPromise<(import(".prisma/client").Category & {
        items: {
            name: string;
        }[];
    })[]>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): import(".prisma/client").Prisma.Prisma__CategoryClient<import(".prisma/client").Category, never>;
    remove(name: string): Promise<import(".prisma/client").Category>;
    replace(id: string, updateCategoryDto: UpdateCategoryDto): import(".prisma/client").Prisma.Prisma__CategoryClient<import(".prisma/client").Category, never>;
}
