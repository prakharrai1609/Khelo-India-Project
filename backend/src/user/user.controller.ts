import {
  Body,
  Controller,
  Get,
  HttpException,
  Post,
  Query,
} from '@nestjs/common';
import { User } from './dto/user.dto';
import DatabaseService from 'src/database/database.service';

@Controller('/user')
export class UserController {
  constructor(private db: DatabaseService) {}

  @Post('/create-user')
  async createUser(@Body() body: User) {
    try {
      await this.db.addUserData(body);
      return { status: 'success' };
    } catch (err) {
      console.log(err);
      throw new HttpException('Error occurred while creating new user', 422);
    }
  }

  @Post('/authenticate-user')
  async authenticateUser(@Body() body) {
    try {
      return await this.db.getUserData(body);
    } catch (err) {
      console.log(err);
      throw new HttpException('User not found', 404);
    }
  }

  @Get('/get-requests')
  async getRequests(@Query() query: any) {
    try {
      return this.db.getRequestsFromStatus(query);
    } catch (err) {
      throw new Error(err);
    }
  }

  @Post('/add-user-form')
  async createForm(@Body() body: any) {
    try {
      return this.db.createUserForm(body);
    } catch (err) {
      throw new Error(err);
    }
  }
}
