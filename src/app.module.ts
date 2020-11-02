import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql/dist/graphql.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { MongooseModule, Schema } from '@nestjs/mongoose';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile:true,
      playground:true
    }),
    MongooseModule.forRoot('mongodb+srv://user:admin@cluster0.guih4.mongodb.net/nestDB?retryWrites=true&w=majority'),
    UserModule,
    
  ],
  controllers: [AppController, ],
  providers: [AppService],
})
export class AppModule {}
