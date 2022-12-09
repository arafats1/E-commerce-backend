import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
export class CreateSignUpDto {
    @ApiProperty()
    @IsEmail()
    email: string;
    @ApiProperty()
    phone : string;
    @ApiProperty()
    @IsNotEmpty()
    password: string;
      
}
