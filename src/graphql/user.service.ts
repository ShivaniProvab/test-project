import { Injectable } from '@nestjs/common';
import { Users,UserDocument } from './user.entity';
import {Model} from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  
  constructor(
    @InjectModel(Users.name)
    private readonly userModel:Model<UserDocument>,
  ) {}

  async findAll(): Promise<Users[]> {
    return this.userModel.find().exec();
  }

  async findUser(username: string,password:string): Promise<Users> {
    if(username){
      const User = await this.userModel.findOne({username,password})
      console.log(User)
      return User
    }
    throw new Error('Method not implemented.');
  }

  async create(input) : Promise<Users> {
    console.log(input,"input")
    const user = new this.userModel()
    user.username = input.username;
    user.email=input.email;
    user.password = input.password;
    user.createdOn=new Date();
    return user.save();
  }
}