import { Controller, Request, Post, UseGuards, Get, Body, ValidationPipe, ClassSerializerInterceptor, UseInterceptors, UploadedFile } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { SignUpsService } from './sign-ups/sign-ups.service';
import { CreateSignUpDto } from './sign-ups/dto/create-sign-up.dto';
import{ AuthDto } from './auth/auth-dto/auth.dto';
import { UsePipes } from '@nestjs/common';
import { SignUpEntity } from './sign-ups/entities/sign-up.entity';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('auth')
@Controller('auth')    
export class AppController {
  constructor(private authService: AuthService,
              private signUpsService: SignUpsService,
              private appService: AppService
    ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiOperation({ summary: 'Logs user into system' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
          example: 'username@gmail.com',
          description: 'Email of the user',
        },
        password: {
          type: 'string',
          example: 'User@1232450',
          description: 'Password of the user',
        },
      },
    },
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Successful', 
  })
  @ApiResponse({
    status: 201,
    description: 'Created',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  })
  @ApiResponse({ 
    status: 403, 
    description: 'Forbidden', 
  })
  @ApiResponse({ 
    status: 500, 
    description: 'Internal server error', 
  })
  @ApiResponse({ 
    status: 401, 
    description: 'Unauthorized', 
  })

  async login(@Request() req, @Body() authDto: AuthDto) {
    return this.authService.login(req.user);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post('signup')
  @ApiOperation({ summary: 'Registers user into system' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
          example: 'username@gmail.com',
          description: 'Email of the user',
        },
        phone: {
          type: 'string',
          example: '0789 234 890',
          description: 'Phone number of the user',
        },
        password: {
          type: 'string',
          example: 'User@1232450',
          description: 'Password of the user',
        },
      },
    },
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Successful', 
  })
  @ApiResponse({
    status: 201,
    description: 'Created',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  })
  @ApiResponse({ 
    status: 403, 
    description: 'Forbidden', 
  })
  @ApiResponse({ 
    status: 500, 
    description: 'Internal server error', 
  })
  async create(@Body(new ValidationPipe()) createSignUpDto: CreateSignUpDto): Promise<SignUpEntity> {
    return new SignUpEntity(await this.signUpsService.create(createSignUpDto));
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    return this.appService.uploadImageToCloudinary(file);
  }

  // @UseGuards(JwtAuthGuard)
  // @Get('profile')
  // getDashboard(@Request() req) {
  //   return req.user;
    
  // }
}

