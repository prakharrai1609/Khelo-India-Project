import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "../schemas/user.schema"
import { Model } from "mongoose";

@Injectable()
export default class DatabaseService {
    constructor(@InjectModel(User.name) private user: Model<UserDocument>) { }

    async getUserData(data): Promise<any> {
        const { email, password } = data;
        return await this.user.exists({ email: email, password: password });
    }

    async addUserData(data: User): Promise<any> {
        const { name, email, password } = data;
        await this.user.create({ name: name, email: email, password: password })
    }
}