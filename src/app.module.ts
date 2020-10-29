import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql/dist/graphql.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      playground: true
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url:
        'mongodb+srv://user:admin@cluster0.guih4.mongodb.net/nestDB?retryWrites=true&w=majority',
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: true,
      useNewUrlParser: true,
      logging: true,
    }),
    UserModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
