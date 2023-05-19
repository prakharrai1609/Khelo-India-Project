import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import { Model } from 'mongoose';
import { Admin, AdminDocument } from 'src/schemas/admin.schema';
import { Form, FormDocument } from 'src/schemas/form.schema';

@Injectable()
export default class DatabaseService {
  constructor(
    @InjectModel(User.name) private user: Model<UserDocument>,
    @InjectModel(Admin.name) private admin: Model<AdminDocument>,
    @InjectModel(Form.name) private form: Model<FormDocument>,
  ) {}

  async getUserData(data): Promise<any> {
    const { email, password } = data;
    return await this.user.exists({ email: email, password: password });
  }

  async addUserData(data: User): Promise<any> {
    const { name, email, password } = data;
    await await this.user.create({
      name: name,
      email: email,
      password: password,
    });
  }

  async getAdminData(data): Promise<any> {
    const { email, password } = data;
    return await this.admin.exists({ email: email, password: password });
  }

  async addAdminData(data: Admin): Promise<any> {
    const { name, email, password } = data;
    await await this.admin.create({
      name: name,
      email: email,
      password: password,
    });
  }

  async getRequestsFromStatus(query) {
    return await this.form.find(query);
  }

  async createUserForm(body) {
    return await this.form.create(body);
  }
}
