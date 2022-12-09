import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

 

  // @Get('')
  // findAll() {
  //   return this.usersService.findAll();
  // }
  // @Get('dashboard/:id')
  // findDashboard(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }

  

}
