import { Module } from "@nestjs/common";
import DatabaseModule from "src/database/database.module";
import { AdminController } from "./admin.controller";

@Module({
    imports: [DatabaseModule],
    controllers: [AdminController],
    providers: [],
    exports: []
})

export class AdminModule { }