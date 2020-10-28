import { Controller, Get } from '@nestjs/common';

@Controller('register')
export class RegisterController {
    @Get()
    addUser(){
        return 'High !!!'
    }
}
