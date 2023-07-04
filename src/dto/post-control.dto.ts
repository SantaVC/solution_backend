export class CreateUserDto {
    readonly name: string;
}

export class CreateMealDto{
    readonly name: string;
}

export class CreateAnswersDto{
    readonly user_id: number;
    readonly meal_id: number;
    readonly likes: boolean;
}