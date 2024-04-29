import { ApiProperty } from "@nestjs/swagger";

export class CreateAdminDto {
    @ApiProperty({
        example: "ibadtoff@gmail.com",
        description: "Admin email",
        required: true
    })
    readonly email: string;

    @ApiProperty({
        example: "12345678",
        description: "Admin password",
        required: true
    })
    readonly password: string;
}
