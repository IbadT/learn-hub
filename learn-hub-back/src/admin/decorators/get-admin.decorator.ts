import { HttpCode, HttpStatus, applyDecorators } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";

export function GetAdminApiDocs() {
    return applyDecorators(
        HttpCode(HttpStatus.OK),
        ApiOperation({ summary: "Get Admin" }),
        ApiResponse({
            status: HttpStatus.OK,
            description: 'Description',
            schema: {
                example: {
                    id: "1"
                }
            },
        }),
        ApiResponse({
            status: HttpStatus.BAD_REQUEST,
            description: "Something went wrong"
        })
    )
}