interface Image {
    url: string;
    resolution: string;
    type: string;
}
export declare class CreateUserDto {
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
        images: Image[];
    };
    signUp: {
        connect: {
            id: number;
        };
    };
}
export {};
