import { SignUpsService } from 'src/sign-ups/sign-ups.service';
import { JwtService } from '@nestjs/jwt';
import { CreateSignUpDto } from 'src/sign-ups/dto/create-sign-up.dto';
export declare class AuthService {
    private signUpsService;
    private jwtService;
    static signup(createSignUpDto: CreateSignUpDto): void;
    constructor(signUpsService: SignUpsService, jwtService: JwtService);
    signup(user: any): Promise<{
        access_token: string;
    }>;
    validateUser(email: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
        email: any;
    }>;
}
