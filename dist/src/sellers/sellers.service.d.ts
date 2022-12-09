import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class SellersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createSellerDto: CreateSellerDto): string;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Seller & {
        bizInfo: {
            businessName: string;
            typeOfBusiness: string;
        };
        user: {
            firstName: string;
            lastName: string;
            dateOfBirth: string;
            nationality: string;
            physicalAddress: {
                country: string;
                city: string;
                postalCode: string;
            }[];
        };
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__SellerClient<import(".prisma/client").Seller & {
        bizInfo: {
            businessName: string;
            typeOfBusiness: string;
            registrationNo: string;
        };
        signUp: {
            email: string;
            phone: string;
        };
        user: {
            firstName: string;
            lastName: string;
            dateOfBirth: string;
            nationality: string;
            physicalAddress: {
                country: string;
                city: string;
                postalCode: string;
            }[];
        };
    }, never>;
    update(id: number, updateSellerDto: UpdateSellerDto): import(".prisma/client").Prisma.Prisma__SellerClient<import(".prisma/client").Seller, never>;
    remove(id: number): string;
}
