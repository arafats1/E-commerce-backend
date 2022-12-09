interface Image {
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
export declare class CreateBizInfoDto {
    businessName: string;
    typeOfBusiness: string;
    referredBy: string;
    taxID: string;
    registrationNo: string;
    images: Image[];
    physicalAddress: {
        country: string;
        city: string;
        postalCode: string;
    };
    paymentDetails: {
        bankAccounts: BankAccount[];
        mobileMoneyAccounts: MobileMoneyAccount[];
        cryptoCurrencyAccounts: CryptoCurrencyAccount[];
    };
}
export {};
