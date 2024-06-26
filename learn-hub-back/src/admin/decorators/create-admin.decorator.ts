import { HttpCode, HttpStatus, applyDecorators } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { CreateAdminDto } from "../dto/create-admin.dto";

export function CreateAdminApiDocs() {
    return applyDecorators(
        HttpCode(HttpStatus.CREATED),
        ApiOperation({ summary: "Create Admin" }),
        ApiResponse({
            status: HttpStatus.CREATED,
            description: "Created",
            schema: {
                example: {
                    email: "ibadtoff@gmail.com",
                    password: "12345678"
                },
              },
            }),
        ApiResponse({
            status: HttpStatus.BAD_REQUEST,
            description: "Bad Request"
        })
    )
}