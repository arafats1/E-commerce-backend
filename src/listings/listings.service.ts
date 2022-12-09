import { Injectable } from '@nestjs/common';
import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/update-listing.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ListingsService {
  constructor(private prisma: PrismaService) {}
  create(createListingDto: CreateListingDto) {
  }

  findAll() {
    return this.prisma.listing.findMany({include:{productListing:{select:{color:true, size:true, quantity:true, price:true, currencies:{select:{currencyName:true}}, products:{select:{items:{select:{name:true,category:true, brand:true, images:{select:{url:true, type:true}}}}}}}}, serviceListing:{select:{price:true, currencies:{select:{currencyName:true}}, services:{select:{items:{select:{name:true,category:true, brand:true, images:{select:{url:true, type:true}}}}}}}}, propertyListing:{select:{size:true, price:true, currencies:{select:{currencyName:true}}, properties:{select:{type:true, location:true, items:{select:{name:true,category:true, brand:true, images:{select:{url:true, type:true}}}}}}}}}});
  }

  findOne(id: number) {
    return this.prisma.listing.findUnique({where:{id:id},include:{productListing:{select:{color:true, size:true, quantity:true, price:true, currencies:{select:{currencyName:true}}, products:{select:{items:{select:{name:true,category:true, brand:true, images:{select:{url:true, type:true}}}}}}}}, serviceListing:{select:{price:true, currencies:{select:{currencyName:true}}, services:{select:{items:{select:{name:true,category:true, brand:true, images:{select:{url:true, type:true}}}}}}}}, propertyListing:{select:{size:true, price:true, currencies:{select:{currencyName:true}}, properties:{select:{type:true, location:true, items:{select:{name:true,category:true, brand:true, images:{select:{url:true, type:true}}}}}}}}}});
  }

  update(id: number, updateListingDto: UpdateListingDto) {
    return this.prisma.listing.update({where:{id:id},
    data:{
      description:updateListingDto.description,
      productListing:{
        create:{
          color:updateListingDto.productListing.color,
          size:updateListingDto.productListing.size,
          quantity:updateListingDto.productListing.quantity,
          price:updateListingDto.productListing.price,
          currencies:{
            create:{
              currencyName:updateListingDto.productListing.currencies.currencyName
            }
          },
        }
      },
      bizInfo:{
        connect:{
          id:updateListingDto.seller.connect.id
        }
      }
    }});
  }

  replace(id: number, updateListingDto: UpdateListingDto) {
    return this.prisma.listing.update({where:{id:id},
      data:{
        description:updateListingDto.description,
        productListing:{
          create:{
            color:updateListingDto.productListing.color,
            size:updateListingDto.productListing.size,
            quantity:updateListingDto.productListing.quantity,
            price:updateListingDto.productListing.price,
            currencies:{
              create:{
                currencyName:updateListingDto.productListing.currencies.currencyName
              }
            },
          }
        },
        bizInfo:{
          connect:{
            id:updateListingDto.seller.connect.id
          }
        }
      }});
  }

  remove(id: number) {
    return this.prisma.listing.delete({
      where: { id: id },
      include : {productListing:true}
    });
  }
}
