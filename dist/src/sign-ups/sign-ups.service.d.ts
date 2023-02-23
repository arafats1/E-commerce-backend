import { CreateSignUpDto } from './dto/create-sign-up.dto';
import { UpdateSignUpDto } from './dto/update-sign-up.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
export declare class SignUpsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createSignUpDto: CreateSignUpDto): import(".prisma/client").Prisma.Prisma__SignUpClient<import(".prisma/client").SignUp, never>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<(import(".prisma/client").SignUp & {
        kyc: (import(".prisma/client").User & {
            identificationDetails: {
                images: {
                    url: string;
                    resolution: string;
                    type: string;
                }[];
                idType: string;
            }[];
            physicalAddress: {
                country: string;
                city: string;
                postalCode: string;
            }[];
        })[];
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__SignUpClient<import(".prisma/client").SignUp & {
        kyc: (import(".prisma/client").User & {
            identificationDetails: {
                images: {
                    url: string;
                    resolution: string;
                    type: string;
                }[];
                idType: string;
            }[];
            physicalAddress: {
                country: string;
                city: string;
                postalCode: string;
            }[];
        })[];
    }, never>;
    findOneByEmail(email: string): import(".prisma/client").Prisma.Prisma__SignUpClient<import(".prisma/client").SignUp, never>;
    findOneByPhone(phone: string): import(".prisma/client").Prisma.Prisma__SignUpClient<import(".prisma/client").SignUp, never>;
    createKyc(id: number, createUserDto: CreateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User, never>;
    update(id: number, updateSignUpDto: UpdateSignUpDto): import(".prisma/client").Prisma.Prisma__SignUpClient<import(".prisma/client").SignUp, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__SignUpClient<import(".prisma/client").SignUp, never>;
}
