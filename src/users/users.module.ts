import {forwardRef, Module} from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./users.model";
import {Role} from "../roles/roles.model";
import {UsersRoles} from "../roles/users-roles.model";
import {RolesModule} from "../roles/roles.module";
import {AuthModule} from "../auth/auth.module";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
      forwardRef(() => AuthModule),
      SequelizeModule.forFeature([User, Role, UsersRoles]),
      RolesModule
  ],
    exports: [
        UsersService,
    ]
})
export class UsersModule {}
