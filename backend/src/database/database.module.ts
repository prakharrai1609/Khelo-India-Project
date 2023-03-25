import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule, ConfigService } from "@nestjs/config";
import DatabaseService from "./database.service";
import { User, UserSchema } from "src/schemas/user.schema";
import { Admin, AdminSchema } from "src/schemas/admin.schema";

@Module({
    imports: [
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (config: ConfigService) => {
                const url = config.get('mongo.uri');
                const name = config.get('mongo.name');
                // console.log(url, name)
                return {
                    dbName: name,
                    uri: url,
                }
            }
        }),
        DatabaseModule.forRoot(),
    ],
    exports: [DatabaseService],
    providers: [DatabaseService],
})

export default class DatabaseModule {
    static forRoot() {
        return MongooseModule.forFeature([
            { name: User.name, schema: UserSchema },
            { name: Admin.name, schema: AdminSchema }
        ])
    }
}