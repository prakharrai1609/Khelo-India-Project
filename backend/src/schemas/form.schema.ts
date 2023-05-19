import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Status } from 'src/common/enums';

export type FormDocument = HydratedDocument<Form>;

@Schema()
export class Form {
  @Prop()
  userId: string;

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

  @Prop()
  rejectReason: string;
}

export const FormSchema = SchemaFactory.createForClass(Form);
