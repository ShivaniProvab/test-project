import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './user.entity';
import { MongoRepository } from 'typeorm';
import * as uuid from 'uuid';

@Injectable()
export class UserService {
  
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: MongoRepository<Users>,
  ) {}

  async findAll(): Promise<Users[]> {
    return this.userRepository.find();
  }
  async findUser(username: string): Promise<Users> {
    if(username){
      console.log(username)
      return await this.userRepository.findOne({username})
    }
    throw new Error('Method not implemented.');
  }

  async create(input: Users) : Promise<Users> {
    const user = new Users();
    user._id = uuid.v4();
    user.username = input.username;
    user.email=input.email;
    user.password = input.password;
    user.createdOn=new Date();
    return this.userRepository.save(user);
  }
}