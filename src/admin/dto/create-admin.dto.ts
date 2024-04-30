import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Expose } from 'class-transformer'

export class CreateAdminDto {
    @ApiProperty({
        example: "ibadtoff@gmail.com",
        description: "Admin email",
        required: true
    })
    @Expose()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({
        example: "12345678",
        description: "Admin password",
        required: true
    })
    @Expose()
    @IsNotEmpty()
    @IsString()
    password: string;
}
