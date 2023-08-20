import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiResponse({ status: 201, description: 'Han sido retornado el array de users correctamente.'})
  getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Get(':id')
  @ApiResponse({ status: 201, description: 'Ha sido retornado el user correctamente.'})
  getUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.usersService.getUser(id);
  }
  
  @Post()
  @ApiResponse({ status: 201, description: 'Ha sido agregado el user correctamente.'})
  createUser(@Body() newUser: CreateUserDto): Promise<User> {
    return this.usersService.createUser(newUser);
  }

  @Delete(':id')
  @ApiResponse({ status: 201, description: 'Ha sido eliminado el user correctamente.'})
  deleteUser(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.usersService.deleteUser(id);
  }

  @Patch(':id')
  @ApiResponse({ status: 201, description: 'Ha sido modificado el user correctamente.'})
  updateUser(@Param('id', ParseIntPipe) id: number, @Body() user: UpdateUserDto): Promise<UpdateResult> {
    return this.usersService.updateUser(id, user);
  }

}
