import { Injectable } from '@nestjs/common';
import { CreateBizInfoDto } from './dto/create-biz-info.dto';
import { UpdateBizInfoDto } from './dto/update-biz-info.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateListingDto } from 'src/listings/dto/create-listing.dto';

@Injectable()
export class BizInfoService {
  constructor(private prisma: PrismaService){}
  create(createBizInfoDto: CreateBizInfoDto) {
    let {businessName, typeOfBusiness, referredBy, taxID, registrationNo, physicalAddress, paymentDetails, images} = createBizInfoDto;
    return this.prisma.bizInfo.create({
      data:{
        businessName,
        typeOfBusiness,
        referredBy,
        taxID,
        registrationNo,
        physicalAddress: {
          create: physicalAddress,
          },
        paymentDetails: {
          create: {
            bankAccounts: {
              create: paymentDetails.bankAccounts,
            },
            mobileMoneyAccounts: {
              create: paymentDetails.mobileMoneyAccounts,
            },
            cryptoCurrencyAccounts: {
              create: paymentDetails.cryptoCurrencyAccounts,
            }
          }
        },
        images: {
          create: images,
          }
      }
        
    });
  }

  createListing(id:number, createListingDto: CreateListingDto){
    //Create listing and connect to current bizInfo id
    return this.prisma.listing.create({
      data:{
        ...createListingDto,
        bizInfo: {
          connect: {
            id: id
          },
        },
        productListing: {
          create: {
            ...createListingDto.productListing,
            currencies: {
              create: {
                ...createListingDto.productListing.currencies,
              },
            },
            products: {
              create: {
                ...createListingDto.productListing.products,
                items: {
                  create: {
                    ...createListingDto.productListing.products.items,
                    images: {
                      create: {
                        ...createListingDto.productListing.products.items.images,
                      },
                    },
                  },
                },
              },
            },
          },
        }
      }
    })
        

  }

  findAll() {
    // return `This action returns all bizInfo`;
    return this.prisma.bizInfo.findMany({include:{physicalAddress:{select:{country:true,city:true,postalCode:true}},paymentDetails:{select:{bankAccounts:{select:{accountName:true,accountNumber:true,swiftCode:true,bankName:true}},mobileMoneyAccounts:{select:{name:true,number:true}},cryptoCurrencyAccounts:{select:{walletAddress:true,accountId:true}}}}, images:{select:{url:true,resolution:true,type:true}}, listings:{select:{description:true, productListing:{select:{color:true, size:true, quantity:true, price:true, currencies:{select:{currencyName:true}}, products:{select:{items:{select:{name:true, category:true, brand:true, images:{select:{url:true}}}}}}}}, serviceListing:{select:{price:true, currencies:{select:{currencyName:true}}, services:{select:{items:{select:{name:true, category:true, brand:true, images:{select:{url:true}}}}}}}}, propertyListing:{select:{size:true, price:true, currencies:{select:{currencyName:true}}, properties:{select:{type:true, location:true, items:{select:{name:true, category:true, brand:true, images:{select:{url:true}}}}}}}}}}}});
  }
  
  

  findOne(id: number) {
    // return `This action returns a #${id} bizInfo`;
    return this.prisma.bizInfo.findUnique({where: {id: id}, include:{physicalAddress:{select:{country:true,city:true,postalCode:true}},paymentDetails:{select:{bankAccounts:{select:{accountName:true,accountNumber:true,swiftCode:true,bankName:true}},mobileMoneyAccounts:{select:{name:true,number:true}},cryptoCurrencyAccounts:{select:{walletAddress:true,accountId:true}}}}, images:{select:{url:true,resolution:true,type:true}}, listings:{select:{description:true, productListing:{select:{color:true, size:true, quantity:true, price:true, currencies:{select:{currencyName:true}}, products:{select:{items:{select:{name:true, category:true, brand:true, images:{select:{url:true}}}}}}}}, serviceListing:{select:{price:true, currencies:{select:{currencyName:true}}, services:{select:{items:{select:{name:true, category:true, brand:true, images:{select:{url:true}}}}}}}}, propertyListing:{select:{size:true, price:true, currencies:{select:{currencyName:true}}, properties:{select:{type:true, location:true, items:{select:{name:true, category:true, brand:true, images:{select:{url:true}}}}}}}}}}}});
  }
  

  update(id: number, updateBizInfoDto: UpdateBizInfoDto) {
    // return `This action updates a #${id} bizInfo`;
    return this.prisma.bizInfo.update({
      where: { id },
      data: updateBizInfoDto,
    });
  }


  remove(id: number) {
   // return `This action removes a #${id} bizInfo`;
    return this.prisma.bizInfo.delete({ where: { id } });
  }

}