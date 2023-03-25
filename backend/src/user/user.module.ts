import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import DatabaseModule from "src/database/database.module";

@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers: [],
    exports: []
})

export class UserModule { }