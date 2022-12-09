import { PartialType } from '@nestjs/swagger';
import { CreateSignUpDto } from './create-sign-up.dto';

export class UpdateSignUpDto extends PartialType(CreateSignUpDto) {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    nationality: string;
    areaOfResidence: string;
    physicalAddress:{
        country: string;
        city: string;
        postalCode: string;
    };
    identificationDetails: {
        idType: string;
        images: {
            url: string;
            resolution: string;
            type: string;
        }
    };

}
