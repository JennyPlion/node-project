import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { User } from './schemas/user.schema';
import { UsersService } from './users.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern('user-topic') // topic name here
  async getUser(@Payload() message): Promise<User> {
    const id = message.userid;
    console.log("--------------------id", id);
    
    return this.usersService.getUserById(id);
  }

  @MessagePattern('get-all-users-topic') // topic name here
  async getUsers(): Promise<User[]> {
      return this.usersService.getUsers();
  }

  // @Post()
  // async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
  //     return this.usersService.createUser(createUserDto.email, createUserDto.age)
  // }

  // @MessagePattern('user-topic') // topic name here
  // async updateUser(@Payload() message, @Body() updateUserDto: UpdateUserDto): Promise<User> {
  //     const id = message.userid;
  //     return this.usersService.updateUser(id, updateUserDto);
  // }
}