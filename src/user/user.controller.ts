import { Body, Controller, Param, Post } from '@nestjs/common';
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

    @Post('login')
    login(@Body() body){
        return this.UserResolver.login(body.username)

    }
    
}
