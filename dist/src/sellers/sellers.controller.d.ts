import { SellersService } from './sellers.service';
import { UpdateSellerDto } from './dto/update-seller.dto';
export declare class SellersController {
    private readonly sellersService;
    constructor(sellersService: SellersService);
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
    findOne(id: string): import(".prisma/client").Prisma.Prisma__SellerClient<import(".prisma/client").Seller & {
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
    update(id: string, updateSellerDto: UpdateSellerDto): import(".prisma/client").Prisma.Prisma__SellerClient<import(".prisma/client").Seller, never>;
    remove(id: string): string;
}
