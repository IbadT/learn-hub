import { HttpCode, HttpStatus, applyDecorators } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";

export function DeleteAdminApiDocs() {
    return applyDecorators(
        HttpCode(HttpStatus.OK),
        ApiOperation({ summary: "Get Admin" }),
        ApiResponse({
            status: HttpStatus.BAD_REQUEST,
            description: "Something went wrong"
        })
    )
}