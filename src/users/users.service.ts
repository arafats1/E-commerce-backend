import { Body, Injectable, Patch } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UsersService {
  update(arg0: number, updateUserDto: UpdateUserDto) {
    throw new Error('Method not implemented.');
  }
  constructor(private prisma: PrismaService){}
  create(createUserDto: CreateUserDto) {
    //Create a new user 
    let {firstName, lastName, dateOfBirth, nationality, areaOfResidence, physicalAddress, identificationDetails, signUp} = createUserDto;
    
    return this.prisma.user.create({
      data:{
        firstName,
        lastName,
        dateOfBirth,
        nationality,
        areaOfResidence,
        physicalAddress: {
          create: physicalAddress,
        },
        identificationDetails: {
          create: {
            idType: identificationDetails.idType,
            images: {
              create: identificationDetails.images,
            },
          }
        },
        signUp: {
          connect: {
            id: signUp.connect.id,
          },
        },
      }
    });
  }

  findAll() {
    // return data from users table, images table, merchant table
    return this.prisma.user.findMany();
  }

}
