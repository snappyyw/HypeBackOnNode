import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../users/user.model';

interface IAddFavourites {
  formula: string;
  text: string;
  answer: string;
  userId: number;
}

@Table({ tableName: 'favourites' })
export class Favourites extends Model<Favourites, IAddFavourites> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Formula' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  formula: string;

  @ApiProperty({ example: 'Text' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  text: string;

  @ApiProperty({ example: 'Answer' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  answer: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
