import { Injectable } from '@nestjs/common';
import { SignUpsService } from 'src/sign-ups/sign-ups.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateSignUpDto } from 'src/sign-ups/dto/create-sign-up.dto';
import { create } from 'domain';


@Injectable()
export class AuthService {
  static signup(createSignUpDto: CreateSignUpDto) {
    throw new Error('Method not implemented.');
  }
    constructor(private signUpsService: SignUpsService,
                private jwtService: JwtService,
        ) {}



        //Handle user signup, require email and password
        async signup(user: any) {
            const payload = { email: user.email, sub: user.id };
            return {
                access_token: this.jwtService.sign(payload),
            };
        }


    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.signUpsService.findOneByEmail(email);
        if (user && await bcrypt.compare(password, user.password)) {
            const { password, ...result } = user;
            return result;
        }
         return null;
    }

    async login( user: any) {
        const payload = { email: user.email, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
            email: user.email,
        };
    }

    // async validateUser2(phone: string, password: string): Promise<any> {
    //     const user = await this.signUpsService.findOneByPhone(phone);
    //     const isMatch = await bcrypt.compare(password, user.password);
    //     if (user && isMatch) {
    //         const { password, ...result } = user;
    //         return result;

    //     }
    //      return null;
    // }

    // async login2( user: any) {
    //     const payload = { phone: user.phone, sub: user.id };
    //     return {
    //         access_token: this.jwtService.sign(payload),
    //         phone: user.phone
    //     };
    // }
}

