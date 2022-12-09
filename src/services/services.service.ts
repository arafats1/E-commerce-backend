import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostNotFoundException } from './exception/postNotFound.exception';
@Injectable()
export class ServicesService {
  constructor(private prisma: PrismaService) {}
  create(createServiceDto: CreateServiceDto) {
    // return this.prisma.service.create({data:createServiceDto});
  }

  findAll() {
    return this.prisma.service.findMany({include:{serviceListing:{select:{price:true, currencies:{select:{currencyName:true}}, services:{select:{type:true, items:{select:{name:true,category:true, brand:true, images:{select:{url:true, type:true}}}}}}}}}});
  }

  findOne(id: number) {
    return this.prisma.service.findUnique({where:{id:id}, include:{serviceListing:{select:{price:true, currencies:{select:{currencyName:true}}, services:{select:{type:true, items:{select:{name:true,category:true, brand:true, images:{select:{url:true, type:true}}}}}}}}}}).then((service) => {
      if (!service) {
        throw new PostNotFoundException(id);
      }
      return service;
    });
  }

  update(id: number, updateServiceDto: UpdateServiceDto) {
    return this.prisma.service.update({where:{id:id}, data:updateServiceDto});
  }

  remove(id: number) {
    return this.prisma.service.delete({where:{id:id}});
  }

  replace(id: number, updateServiceDto: UpdateServiceDto) {
    return this.prisma.service.update({where:{id:id}, data:updateServiceDto});
  }
}
