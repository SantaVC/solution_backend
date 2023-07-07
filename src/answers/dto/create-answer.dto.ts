import { ApiProperty } from "@nestjs/swagger";

export class CreateAnswersDto {
    @ApiProperty()
    readonly user_id: number;
    @ApiProperty()
    readonly meal_id: number;
    @ApiProperty()
    readonly likes: boolean;
}