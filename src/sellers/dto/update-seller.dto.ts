import { PartialType } from '@nestjs/swagger';
import { CreateSellerDto } from './create-seller.dto';

export class UpdateSellerDto extends PartialType(CreateSellerDto) {
   
    user : {
        firstName: string;
        lastName: string;
        dateOfBirth: Date;
        nationality: string;
    }

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
