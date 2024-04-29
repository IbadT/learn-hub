import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { ADMIN_REPOSITORY } from "src/constants";
import { AdminEntity } from "../entities/admin.entity";

@Injectable()
export class DeleteAdminCommand {
    constructor(
        @Inject(ADMIN_REPOSITORY)
        private adminsRepository: typeof AdminEntity
    ) {}

    async execute(id: string): Promise<void> {
        const admin = await this.adminsRepository.findOne({ where: { id }});
        if(!admin) {
            throw new NotFoundException("Admin is not found");
        }
        await this.adminsRepository.destroy({ where: { id: admin.id}});
    }
};