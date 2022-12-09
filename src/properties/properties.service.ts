import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostNotFoundException } from './exception/postNotFound.exception';

@Injectable()
export class PropertiesService {
  constructor(private prisma: PrismaService) {}
  create(createPropertyDto: CreatePropertyDto) {
    // return this.prisma.property.create({data:createPropertyDto});
  }

  findAll() {
    return this.prisma.property.findMany({include:{propertyListing:{select:{size:true, price:true, currencies:{select:{currencyName:true}}, properties:{select:{type:true, location:true, items:{select:{name:true,category:true, brand:true, images:{select:{url:true, type:true}}}}}}}}}});
  }

  findOne(id: number) {
    return this.prisma.property.findUnique({where:{id:id},include:{propertyListing:{select:{size:true, price:true, currencies:{select:{currencyName:true}}, properties:{select:{type:true, location:true, items:{select:{name:true,category:true, brand:true, images:{select:{url:true, type:true}}}}}}}}} }).then((property) => {
      if (!property) {
        throw new PostNotFoundException(id);
      }
      return property;
    });
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return this.prisma.property.update({where:{id:id}, data:updatePropertyDto});
  }

  remove(id: number) {
    return this.prisma.property.delete({where:{id:id}});
  }

  replace(id: number, updatePropertyDto: UpdatePropertyDto) {
    return this.prisma.property.update({where:{id:id}, data:updatePropertyDto});
  }
}
