import { Resolver,Query, Mutation, Args } from '@nestjs/graphql';
import { Users } from './user.entity';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => String)
    hello(): string {
    return 'Hello World!';
     }

    @Query(()=>String) 
    async login(@Args('username') username:string) {
    return  this.userService.findUser(username)
    }
    
    @Query(() => [Users])
    async users() {
      return this.userService.findAll();
    }
    @Mutation(() => Users)
    async createUser(@Args('input') input: Users) {
      return this.userService.create(input);  
    
    }
    
}
