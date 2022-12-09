import { Injectable } from '@nestjs/common';
import { CreateCarouselDto } from './dto/create-carousel.dto';
import { UpdateCarouselDto } from './dto/update-carousel.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CarouselsService {
  constructor(private prisma: PrismaService){}

  create(createCarouselDto: CreateCarouselDto) {
    return this.prisma.carousel.create({
      data: {
        image: {
          create: {
            url: createCarouselDto.images.url,
            resolution: createCarouselDto.images.resolution,
            type: createCarouselDto.images.type,
          }
        }
      }
    });
  }

  findAll() {
    return this.prisma.carousel.findMany({include:{image:{select:{url:true, resolution:true, type:true}}}});
  }

  findOne(id: number) {
    return this.prisma.carousel.findUnique({ where: {id}, include: {image:{select:{url:true, resolution:true, type:true}}}});
  }

  update(id: number, updateCarouselDto: UpdateCarouselDto) {
    return this.prisma.carousel.update({
      where: { id },
      data: {
        image: updateCarouselDto.images,
      }
    });
  }

  remove(id: number) {
    return this.prisma.carousel.delete({ where: { id } });
  }
}
