import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostNotFoundException } from './exception/postNotFound.exception';
import { CreateItemDto } from 'src/items/dto/create-item.dto';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService){}

  create(createCategoryDto: CreateCategoryDto) {
 
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

  createItem(name: string, createItemDto: CreateItemDto) {
    return this.prisma.item.create({
      data:{
        ...createItemDto,
        category : {
          connect: {
            name : name
          },
        },
        images: {
          create: createItemDto.images
        }
      }
    });
    }
    

  findAll() {
    // return `This action returns all categories`;
    return this.prisma.category.findMany({include:{images:{select:{url:true, resolution:true, type:true}}}});
  }


  findItems(name: string) {
    return this.prisma.category.findMany({ where:{name: name}, include: {items: {select:{name:true,}}}});
  }

  findByName(name: string) {
    return this.prisma.category.findUnique({ where:{name: name}, include: {images:{select:{url:true, resolution:true, type:true}}}});
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.prisma.category.update({
      where: { id },
      data: {
        name: updateCategoryDto.name,
      }
    });
  }

  replace(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.prisma.category.update({
      where: { id },
      data: {
        name: updateCategoryDto.name,
      }
    });
  }

  remove(name: string) {
    // return `This action removes a #${id} category`;
    return this.prisma.category.delete({where:{name: name} }).then((category) => {
      if (!category) {
        throw new PostNotFoundException(name);
      }
      return category;
    });
  }
}
