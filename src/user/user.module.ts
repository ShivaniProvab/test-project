import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserResolver } from 'src/graphql/user.resolver';
import { Users, UserSchema } from '../graphql/user.entity';
import { UserService } from '../graphql/user.service';
import { UserController } from './user.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Users.name, schema: UserSchema }])],
  providers: [UserResolver,UserService],
  controllers: [UserController]
})
export class UserModule {}
