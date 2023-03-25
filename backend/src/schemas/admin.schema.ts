import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type AdminDocument = HydratedDocument<Admin>;

@Schema()
export class Admin {
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    password: string;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);