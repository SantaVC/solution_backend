import { ApiProperty } from "@nestjs/swagger";

export class CreateMealDto {
    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    is_salty: boolean;
}
