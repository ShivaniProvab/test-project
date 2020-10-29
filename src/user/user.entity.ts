import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  _id: string;
  @Column()
  username: string;
  @Column()
  firstname: string;
  @Column()
  lastname: string;
  @Column()
  password: string;
  }