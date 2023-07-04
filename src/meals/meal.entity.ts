import { Column, Model, Table, PrimaryKey, AutoIncrement, HasMany } from 'sequelize-typescript';
import { Answer } from '../answers/answer.entity';

@Table
export class Meal extends Model {

    @Column
    name!: string;

    @Column
    is_salty!: boolean;

    @HasMany(() => Answer)
    answers!: Answer[];
}
