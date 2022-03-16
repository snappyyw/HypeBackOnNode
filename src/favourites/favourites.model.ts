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
  id: string;
  formula: string;
  text: string;
  answer: string;
  userId: number;
}

@Table({ tableName: 'favourites' })
export class Favourites extends Model<Favourites, IAddFavourites> {
  @ApiProperty({ example: 'Id' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
    primaryKey: true,
  })
  id: string;

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
