import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface UserCreationAttributes {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User> {
    @ApiProperty({example: '1', description: 'Unique identificator'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'user@mail.com', description: 'email address'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: '123', description: 'Password'})
    @Column({type: DataType.STRING, allowNull: false })
    password: string;

    @ApiProperty({example: 'true', description: 'Banned user'})
    @Column({type: DataType.BOOLEAN, defaultValue: false })
    banned: boolean;

    @ApiProperty({example: 'For being rude', description: 'Reason for ban'})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;
}