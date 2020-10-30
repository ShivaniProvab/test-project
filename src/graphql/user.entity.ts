import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
@InputType('User')
export class Users {

  @PrimaryColumn()
  @Field()
   _id: string;
  @Column()
  @Field({nullable:true})
   username: string;
  @Column()
  @Field({nullable:true})
   email: string;
  @Column()
  @Field({nullable:true})
  password: string;
  @Column()
  @Field()
  createdOn:Date
  }