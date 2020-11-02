// import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';
// import { Column, Entity, PrimaryColumn } from 'typeorm';
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = Users & Document;

@Schema()
@ObjectType()
@InputType('User')
export class Users{
  @Prop()
  @Field()
  username : string;
  @Prop()
  @Field()
  email : string;
  @Prop()
  @Field()
  password : string;
  @Prop()
  @Field({nullable:true})
  createdOn : Date;
}

export const UserSchema = SchemaFactory.createForClass(Users);

