import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Status } from 'src/common/enums';

export type FormDocument = HydratedDocument<Form>;

@Schema()
export class Form {
  @Prop()
  name: string;

  @Prop()
  location: string;

  @Prop()
  landArea: number;

  @Prop()
  owernship: string;

  @Prop()
  facilities: string;

  @Prop()
  cost: number;

  @Prop()
  costShare: number;

  @Prop()
  closestFacility: number;

  @Prop()
  reason: string;

  @Prop()
  date: string;

  @Prop({
    default: Status.PENDING,
    type: String,
    enum: Status,
  })
  status: string;
}

export const FormSchema = SchemaFactory.createForClass(Form);
