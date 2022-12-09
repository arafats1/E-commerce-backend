/// <reference types="multer" />
import { AuthService } from './auth/auth.service';
import { SignUpsService } from './sign-ups/sign-ups.service';
import { CreateSignUpDto } from './sign-ups/dto/create-sign-up.dto';
import { AuthDto } from './auth/auth-dto/auth.dto';
import { SignUpEntity } from './sign-ups/entities/sign-up.entity';
import { AppService } from './app.service';
export declare class AppController {
    private authService;
    private signUpsService;
    private appService;
    constructor(authService: AuthService, signUpsService: SignUpsService, appService: AppService);
    login(req: any, authDto: AuthDto): Promise<{
        access_token: string;
        email: any;
    }>;
    create(createSignUpDto: CreateSignUpDto): Promise<SignUpEntity>;
    uploadImage(file: Express.Multer.File): Promise<import("cloudinary").UploadApiResponse | import("cloudinary").UploadApiErrorResponse>;
}
