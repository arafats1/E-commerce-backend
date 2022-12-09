import { CreateSignUpDto } from './create-sign-up.dto';
declare const UpdateSignUpDto_base: import("@nestjs/common").Type<Partial<CreateSignUpDto>>;
export declare class UpdateSignUpDto extends UpdateSignUpDto_base {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    nationality: string;
    areaOfResidence: string;
    physicalAddress: {
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
        };
    };
}
export {};
