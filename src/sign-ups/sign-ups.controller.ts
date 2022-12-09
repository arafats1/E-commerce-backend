import { Controller, Get, Post, Body, Patch, Param, Delete, ClassSerializerInterceptor, UseInterceptors } from '@nestjs/common';
import { SignUpsService } from './sign-ups.service';
import { CreateSignUpDto } from './dto/create-sign-up.dto';
import { UpdateSignUpDto } from './dto/update-sign-up.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { SignUpEntity } from './entities/sign-up.entity';

@Controller('')
@ApiTags('Users')
export class SignUpsController {
  constructor(private readonly signUpsService: SignUpsService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('users')
  @ApiOperation({ summary: 'Displays all users of the system' })
  @ApiResponse({ 
    status: 200, 
    description: 'Successful', 
  })
  @ApiResponse({ 
    status: 403, 
    description: 'Forbidden', 
  })
  @ApiResponse({ 
    status: 500, 
    description: 'Internal server error', 
  })
  async findAll(): Promise<SignUpEntity[]> {
    const signUps = await this.signUpsService.findAll();
    return signUps.map((signUp) => new SignUpEntity(signUp));
  }

  // findOneByEmail(@Param('email') email: string) {
  //   return this.signUpsService.findOneByEmail(email);
  // }
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('users/:id')
  @ApiOperation({ summary: 'Get user by id' })
  @ApiResponse({ 
    status: 200, 
    description: 'Successful', 
  })
  @ApiResponse({ 
    status: 403, 
    description: 'Forbidden', 
  })
  @ApiResponse({ 
    status: 500, 
    description: 'Internal server error', 
  })
  async findDashboard(@Param('id') id: string): Promise<SignUpEntity> {
    return new SignUpEntity(
      await this.signUpsService.findOne(+id),
    );
    // return this.signUpsService.findOne(+id);
  }

  @Post('users/:id/kyc')
  @ApiOperation({ summary: 'Creates kyc for user' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        firstName: {
          type: 'string',
          example: 'John',
        },
        lastName: {
          type: 'string',
          example: 'Doe',
        },
        dateOfBirth: {
          type: 'string',
          example: '01/01/1990',
          description: 'This is the date of birth of the user',
        },
        nationality: {
          type: 'string',
          example:'Ugandan',
          description:'The user nationality'
        },
        areaOfResidence: {
          type: 'string',
          example: 'Kampala',
          description: 'The area of residence of the user',
        },
        physicalAddress: {
          type: 'object',
          example:{
            country: 'Uganda',
            city: 'Kampala',
            postalCode: '256'
          }
      },
      identificationDetails: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            idType: {
              type: 'string',
              example: 'National ID',
              description: 'The type of identification document',
            },
            images: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  url: {
                    type: 'string',
                    example: 'https://www.google.com',
                    description: 'The url of the image',
                  },
                  type: {
                    type: 'string',
                    example: 'front view of the ID',
                    description: 'The type of the image',
                  },
                  resolution: {
                    type: 'string',
                    example: '300x300',
                    description: 'The resolution of the image',
                  },
                },
                description: 'The images of the identification document ie front and back and the facial recognition image of the user',
              },
            },
          },
        },
      },
    }
  }})

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

  createKyc(@Param('id') id: string, @Body() createUserDto: CreateUserDto) {
    return this.signUpsService.createKyc(+id, createUserDto);
  }

  @Patch('users/:id')
  @ApiOperation({ summary: 'Update specific user information' })
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
  update(@Param('id') id: string, @Body() updateSignUpDto: UpdateSignUpDto) {
    return this.signUpsService.update(+id, updateSignUpDto);
  }

  @Delete('users/:id')
  @ApiOperation({ summary: 'Delete specific user' })
  @ApiResponse({ 
    status: 200, 
    description: 'Successful', 
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
  remove(@Param('id') id: string) {
    return this.signUpsService.remove(+id);
  }

}
