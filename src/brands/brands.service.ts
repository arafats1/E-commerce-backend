import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostNotFoundException } from './exception/postNotFound.exception';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { CreateItemDto } from 'src/items/dto/create-item.dto';


@Injectable()
export class BrandsService {
  constructor(private prisma: PrismaService, private cloudinary: CloudinaryService){}

   async uploadImageToCloudinary(file: Express.Multer.File,) {
    const result = await this.cloudinary.uploadImage(file);
    if (result.error) {
      throw new BadRequestException(result.error.message);
    }
    return this.prisma.image.create({data:{url: result.url, resolution: result.format, type: result.type}})

  }


  create(createBrandDto: CreateBrandDto) {
    let { name, images } = createBrandDto;
    
    return this.prisma.brand.create({data:{name, images:{create:images}}})
  }

  createItem(name: string, createItemDto: CreateItemDto) {
    return this.prisma.item.create({
      data:{
        ...createItemDto,
        brand : {
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
    return this.prisma.brand.findMany({include:{images:{select:{url:true, resolution:true, type:true}}}});
  }

  findItems(name: string) {
    return this.prisma.brand.findMany({ where:{name: name}, include: {items: {select:{name:true,product:{select:{productListing:{select:{price:true, color:true, size:true}}}}}}}});
  }

  findOne(name: string) {
    return this.prisma.brand.findUnique({ where: {name}, include: {images:{select:{url:true, resolution:true, type:true}}}},
      ).then((brand) => {
        if (!brand) {
          throw new PostNotFoundException(name);
        }
        return brand;
      });
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
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

  remove(name: string) {
    return this.prisma.brand.delete({ where: { name } }).then((brand) => {
      if (!brand) {
        throw new PostNotFoundException(name);
      }
      return brand;
    });
  }

  replace(id: number, updateBrandDto: UpdateBrandDto) {
    return this.prisma.brand.update({
      where: { id },
      data: {
        name: updateBrandDto.name
      }
    });
  }
}
