export declare class SignUpEntity {
    id: number;
    email: string;
    phone: string;
    createdAt: Date;
    updatedAt: Date;
    password: string;
    constructor(partial: Partial<SignUpEntity>);
}
