import { Body, Controller, Param, Post, UseGuards,Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { Users } from 'src/graphql/user.entity';
import {UserResolver} from '../graphql/user.resolver'

@Controller('user')
export class UserController {

    constructor(private readonly UserResolver:UserResolver){};

    @Post()
    findAll() {
        return this.UserResolver.users()
    }

    @Post('signUp')
    signUp(@Body() body){
        return this.UserResolver.createUser(body)
    }    

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
      return req.user;
    }
    
}
