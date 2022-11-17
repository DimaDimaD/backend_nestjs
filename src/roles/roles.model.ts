import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";
import {UsersRoles} from "./users-roles.model";


interface RoleCreationAttrs {
    value: string;
    description: string;
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttrs> {

    @ApiProperty({example: '1', description: 'Unique identificator'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'ADMIN', description: 'Role unique'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string;

    @ApiProperty({example: 'Administratior', description: 'Role description'})
    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @BelongsToMany(() => User, () => UsersRoles)
    users: User[];
}