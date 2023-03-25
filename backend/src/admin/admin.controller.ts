import { Body, Controller, HttpException, Post } from "@nestjs/common";
import Admin from "./dto/admin.dto";
import DatabaseService from "src/database/database.service";

@Controller('/admin')
export class AdminController {
    constructor(private db: DatabaseService) { }

    @Post('/create-admin')
    async createAdmin(@Body() body: Admin) {
        try {
            await this.db.addAdminData(body);
            return { "status": "success" }
        } catch (err) {
            console.log(err);
            throw new HttpException("Error occurred while creating new user", 422);
        }
    }


    @Post('/authenticate-admin')
    async authenticateAdmin(@Body() body) {
        try {
            return await this.db.getAdminData(body);
        } catch (err) {
            console.log(err);
            throw new HttpException("User not found", 404);
        }
    }
}