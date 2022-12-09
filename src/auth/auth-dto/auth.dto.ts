import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEmail } from 'class-validator';
export class AuthDto {
    @ApiProperty()
    @IsEmail()
    email: string;
    @ApiProperty()
    password: string;
}