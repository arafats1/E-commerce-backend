import { CreateSellerDto } from './create-seller.dto';
declare const UpdateSellerDto_base: import("@nestjs/common").Type<Partial<CreateSellerDto>>;
export declare class UpdateSellerDto extends UpdateSellerDto_base {
    user: {
        firstName: string;
        lastName: string;
        dateOfBirth: Date;
        nationality: string;
    };
    bizInfo: {
        businessName: string;
        typeOfBusiness: string;
        registrationNo: string;
    };
    signUp: {
        email: string;
        phone: string;
    };
}
export {};
