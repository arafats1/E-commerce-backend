import { ApiProperty } from "@nestjs/swagger";

// interface PhysicalAddress {
//     country: string;
//     city: string;
//     postalCode: string;
// }

interface Image{
    url: string;
    resolution: string;
    type: string;
}

interface BankAccount {
    accountName: string;
    accountNumber: string;
    swiftCode: string;
    bankName: string;
}

interface MobileMoneyAccount {
    name: string;
    number: string;
}

interface CryptoCurrencyAccount {
    walletAddress: string;
    accountId: string;
}

export class CreateBizInfoDto {
    @ApiProperty()
    businessName: string;
    @ApiProperty()
    typeOfBusiness : string;
    @ApiProperty()
    referredBy: string;  
    @ApiProperty()
    taxID: string;
    @ApiProperty()
    registrationNo: string;

    @ApiProperty({type: Array, isArray: true})
    images: Image[];
    
    @ApiProperty()
    physicalAddress: {
        country: string;
        city: string;
        postalCode: string;
    };
    
    @ApiProperty({type: Array, isArray: true})
    paymentDetails: {
       
        bankAccounts: BankAccount[];
      
        mobileMoneyAccounts: MobileMoneyAccount[];
      
        cryptoCurrencyAccounts: CryptoCurrencyAccount[];
    }

   
}