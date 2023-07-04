import { Column, Model, Table, PrimaryKey, AutoIncrement, HasMany } from 'sequelize-typescript';
import { Answer } from '../answers/answer.entity';

@Table
export class User extends Model {

    @Column
    name: string;

    @HasMany(() => Answer)
    answers: Answer[];
}
