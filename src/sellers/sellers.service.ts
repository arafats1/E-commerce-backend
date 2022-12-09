import { Injectable } from '@nestjs/common';
import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateListingDto } from 'src/listings/dto/create-listing.dto';

@Injectable()
export class SellersService {
  constructor(private prisma: PrismaService) {}
  create(createSellerDto: CreateSellerDto) {
    return 'This action adds a new seller';
  }

  findAll() {
    return this.prisma.seller.findMany({include: {user:{select:{firstName:true,lastName:true, dateOfBirth:true, nationality:true, physicalAddress:{select:{country:true, city:true, postalCode:true}}}}, bizInfo:{select:{businessName:true, typeOfBusiness:true}}}});
  }

  findOne(id: number) {
    return this.prisma.seller.findUnique({where:{id}, include: {user:{select:{firstName:true,lastName:true, dateOfBirth:true, nationality:true, physicalAddress:{select:{country:true, city:true, postalCode:true}}}}, bizInfo:{select:{businessName:true, typeOfBusiness:true, registrationNo:true}}, signUp:{select:{email:true, phone:true}},}})
  }

  // createListing(id: number, createListingDto: CreateListingDto) {
  // //Create listing and connect to current seller id
  //   return this.prisma.listing.create({
  //     data: {
  //       ...createListingDto,
  //       seller: {
  //         connect: {
  //           id: id,
  //         },
  //       },
  //       productListing: {
  //         create: {
  //           ...createListingDto.productListing,
  //           currencies: {
  //             create: {
  //               ...createListingDto.productListing.currencies,
  //             },
  //           },
  //           products: {
  //             create: {
  //               ...createListingDto.productListing.products,
  //               items: {
  //                 create: {
  //                   ...createListingDto.productListing.products.items,
  //                   images: {
  //                     create: {
  //                       ...createListingDto.productListing.products.items.images,
  //                     },
  //                   },
  //                 },
  //               },
  //             },
  //           },
  //         },
  //       },
  //     },
  //   });

  // }

  update(id: number, updateSellerDto: UpdateSellerDto) {
    return this.prisma.seller.update({
      where: { id },
      data: {
      }
    })
  }

  remove(id: number) {
    return `This action removes a #${id} seller`;
  }
}
