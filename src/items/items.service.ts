import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ItemsService {
    constructor(private prisma: PrismaService) {}
    
  create(createItemDto: CreateItemDto) {
  let {name, popular, dailyDeals, brand,images, category, } = createItemDto;
  return this.prisma.item.create({data: {name, popular, dailyDeals, brand, category,
    images: {create:images},
    
    // product:{
    //   create:{
    //     productListing:{
    //       create:{
    //         ...product.productListing,
    //         currencies:{
    //           create:{
    //             ...product.productListing.currencies,
    //           }
    //         }
    //       }
    //     }
    //   }
    // },
    // service:{
    //   create:{
    //     type: service.type,
    //     serviceListing:{
    //       create:{
    //         ...service.serviceListing,
    //         currencies:{
    //           create:{
    //             ...service.serviceListing.currencies,
    //           }
    //         }
    //       }
    //     }
    //   }
    // },
    // property:{
    //   create:{
    //     type: property.type,
    //     location: property.location,
    //     propertyListing:{
    //       create:{
    //         ...property.propertyListing,
    //         currencies:{
    //           create:{
    //             ...property.propertyListing.currencies,
    //           }
    //         }
    //       }
    //     }
    //   }
    // }


  }});
  }

  findAll() {
    return this.prisma.item.findMany({include: {product:{select:{productListing:{select:{color:true, size:true, quantity:true, price:true, currencies:{select:{currencyName:true}}}}}}, service:{select:{serviceListing:{select:{price:true, currencies:{select:{currencyName:true}}}}}}, property:{select:{propertyListing:{select:{size:true, price:true, currencies:{select:{currencyName:true}}}}}}, images:{select:{url:true,resolution:true, type:true}}, }});

  }

  // findOne(id: number) {
  //   return this.prisma.item.findUnique({where: {id: id}, include: {images:{select:{url:true,resolution:true, type:true}},}});

  // }

  findPopular() {
    return this.prisma.item.findMany({where: {popular: true}, include: {product:{select:{productListing:{select:{color:true, size:true, quantity:true, price:true, currencies:{select:{currencyName:true}}}}}}, service:{select:{serviceListing:{select:{price:true, currencies:{select:{currencyName:true}}}}}}, property:{select:{propertyListing:{select:{size:true, price:true, currencies:{select:{currencyName:true}}}}}}, images:{select:{url:true,resolution:true, type:true}}, }});
  }
 

  findPopularItem(id: number) {
    return this.prisma.item.findUnique({where: {id: id}, include: {product:{select:{productListing:{select:{color:true, size:true, quantity:true, price:true, currencies:{select:{currencyName:true}}}}}}, service:{select:{serviceListing:{select:{price:true, currencies:{select:{currencyName:true}}}}}}, property:{select:{propertyListing:{select:{size:true, price:true, currencies:{select:{currencyName:true}}}}}}, images:{select:{url:true,resolution:true, type:true}}, }});

  }

  findDailyDeals() {
    return this.prisma.item.findMany({where: {dailyDeals: true}, include: {product:{select:{productListing:{select:{color:true, size:true, quantity:true, price:true, currencies:{select:{currencyName:true}}}}}}, service:{select:{serviceListing:{select:{price:true, currencies:{select:{currencyName:true}}}}}}, property:{select:{propertyListing:{select:{size:true, price:true, currencies:{select:{currencyName:true}}}}}}, images:{select:{url:true,resolution:true, type:true}}, }});
  }

  findDailyDealsItem(id: number) {
    return this.prisma.item.findUnique({where: {id: id}, include: {product:{select:{productListing:{select:{color:true, size:true, quantity:true, price:true, currencies:{select:{currencyName:true}}}}}}, service:{select:{serviceListing:{select:{price:true, currencies:{select:{currencyName:true}}}}}}, property:{select:{propertyListing:{select:{size:true, price:true, currencies:{select:{currencyName:true}}}}}}, images:{select:{url:true,resolution:true, type:true}}, }});
  }
 
 

  update(id: number, updateItemDto: UpdateItemDto) {
    return this.prisma.item.findUnique({where: {id: id}, include: {images:{select:{url:true,resolution:true, type:true}}, }});

  }

  remove(id: number) {
    return this.prisma.item.findUnique({where: {id: id}, include: {images:{select:{url:true,resolution:true, type:true}}, }});

  }

  replace(id: number, updateItemDto: UpdateItemDto) {
    return this.prisma.item.findUnique({where: {id: id}, include: {images:{select:{url:true,resolution:true, type:true}}, }});

  }

}
