import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostNotFoundException } from './exception/postNotFound.exception';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}
  create(createProductDto: CreateProductDto) {
    // return this.prisma.product.create({data:createProductDto});
  }

  findAll() {
    return this.prisma.product.findMany({ include:{productListing:{select:{color:true, size:true, quantity:true, price:true, currencies:{select:{currencyName:true}}, products:{select:{items:{select:{name:true,category:true, brand:true, images:{select:{url:true, type:true}}}}}}}}}});
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({where:{id:id}, include:{productListing:{select:{color:true, size:true, quantity:true, price:true, currencies:{select:{currencyName:true}}, products:{select:{items:{select:{name:true,category:true, brand:true, images:{select:{url:true, type:true}}}}}}}}}}).then((product) => {
      if (!product) {
        throw new PostNotFoundException(id);
      }
      return product;
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.prisma.product.findUnique({where:{id:id},});
  }

  remove(id: number) {
    return this.prisma.product.findUnique({where:{id:id},}).then((product) => {
      if (!product) {
        throw new PostNotFoundException(id);
      }
      return this.prisma.product.delete({where:{id:id}});
    });
  }

  replace(id: number, updateProductDto: UpdateProductDto) {
    return this.prisma.product.findUnique({where:{id:id},});
  }
}
