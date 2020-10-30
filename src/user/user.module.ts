import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../graphql/user.entity';
import { UserResolver } from '../graphql/user.resolver';
import { UserService } from '../graphql/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [UserResolver, UserService]
})
export class UserModule {}
