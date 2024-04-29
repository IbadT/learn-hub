import { Inject, Injectable } from "@nestjs/common";
import { AdminEntity } from "../entities/admin.entity";
import { CreateAdminDto } from "../dto/create-admin.dto";
import { ADMIN_REPOSITORY } from "src/constants";

@Injectable()
export class CreateAdminCommand {
    constructor(
        @Inject(ADMIN_REPOSITORY)
        private adminsRepository: typeof AdminEntity
    ) {}

    async execute(createAdminDto: CreateAdminDto): Promise<AdminEntity> {
        return await this.adminsRepository.create({...createAdminDto});
    }
};