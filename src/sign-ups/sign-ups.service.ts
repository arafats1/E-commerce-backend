import { Injectable } from '@nestjs/common';
import { CreateSignUpDto } from './dto/create-sign-up.dto';
import { UpdateSignUpDto } from './dto/update-sign-up.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import * as brypt from 'bcrypt';
import { access } from 'fs';

@Injectable()
export class SignUpsService {
  constructor(private prisma: PrismaService) {}
  create(createSignUpDto: CreateSignUpDto) {
    const saltOrRounds = 10;
    const password = createSignUpDto.password;
    const salt = brypt.genSaltSync(saltOrRounds);
    const hash = brypt.hashSync(password, salt);
    createSignUpDto.password = hash;
    return this.prisma.signUp.create({ data: createSignUpDto });
  }

  findAll() {
    //Return data from signUp table, user table and its foreign key
    return this.prisma.signUp.findMany({include: {kyc:{include:{physicalAddress:{select:{country:true, city:true, postalCode:true}}, identificationDetails:{select:{idType:true, images:{select:{url:true, resolution:true, type:true}}}}}}}});
  }

  findOne(id: number) {
    return this.prisma.signUp.findUnique( {where: {id: id}, include: {kyc:{include:{physicalAddress:{select:{country:true, city:true, postalCode:true}}, identificationDetails:{select:{idType:true, images:{select:{url:true, resolution:true, type:true}}}}}}}});

  }
  findOneByEmail(email: string) {
    return this.prisma.signUp.findUnique({ where: { email: email } });
  }
  findOneByPhone(phone: string) {
    return this.prisma.signUp.findUnique({ where: { phone: phone } });
  }

 createKyc(id:number, createUserDto: CreateUserDto) {
    //create user and connect to current signUp id
    

    return this.prisma.user.create({
      data: {
        ...createUserDto,
        signUp: {
          connect: {
            id: id,
          },
        },

        physicalAddress: {
          create: {
            ...createUserDto.physicalAddress,
          }
        },
        identificationDetails: {
          create: {
            ...createUserDto.identificationDetails,
            images: {
              create: createUserDto.identificationDetails.images,
            },
          }
      },
      
    }});
  }
      
  
  update(id: number, updateSignUpDto: UpdateSignUpDto) {
    return this.prisma.signUp.update({ where: { id }, data: updateSignUpDto });
  }

  remove(id: number) {
    return this.prisma.signUp.delete({ where: { id } });
  }
}
