import { Resolver,Query, Mutation, Args } from '@nestjs/graphql';
import { User } from './user.entity';
import { UserInput } from './user.input';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
    constructor(private readonly userService: UserService) {}
    
    @Query(()=>String)
    async hello(){
        return 'world'
    }
    @Query(() => [User])
    async users() {
      return this.userService.findAll();
    }
    @Query(() => String)
    async test() {
      return 123;
    }
  
    @Mutation(() => User)
    async createUser(@Args('input') input: UserInput) {
      return await this.userService.create(input);  
    }
    
}
