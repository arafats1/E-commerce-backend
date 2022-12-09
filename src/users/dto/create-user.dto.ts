import { ApiProperty } from "@nestjs/swagger";

interface Image{
    url: string;
    resolution: string;
    type: string;
}

export class CreateUserDto {
    @ApiProperty()
    firstName: string;
    @ApiProperty()
    lastName: string;
    @ApiProperty()
    dateOfBirth: string;
    @ApiProperty()
    nationality: string;
    @ApiProperty()
    areaOfResidence: string;
    
    @ApiProperty()
    physicalAddress:{
        country: string;
        city: string;
        postalCode: string;
    };
    
    @ApiProperty({type: Array, isArray: true})
    identificationDetails: {
        idType: string;
        images: Image[];
    }
    
    @ApiProperty()
    signUp: {
        connect: {
            id: number;
        };
    }
}
