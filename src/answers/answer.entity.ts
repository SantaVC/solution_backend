import { Column, Model, Table, ForeignKey, BelongsTo, AllowNull } from 'sequelize-typescript';
import { User } from '../users/user.entity';
import { Meal } from '../meals/meal.entity';

@Table
export class Answer extends Model {

    @ForeignKey(() => User)
    @Column
    user_id: number;

    @ForeignKey(() => Meal)
    @Column
    meal_id: number;

    @AllowNull(false)
    @Column
    likes: boolean;

    @BelongsTo(() => User)
    user: User;

    @BelongsTo(() => Meal)
    meal: Meal;
}
