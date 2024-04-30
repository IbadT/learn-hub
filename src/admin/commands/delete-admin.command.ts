import { Injectable, NotFoundException } from "@nestjs/common";
import { AdminEntity } from "../entities/admin.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class DeleteAdminCommand {
    constructor(
        @InjectRepository(AdminEntity)
        private readonly adminsRepository: Repository<AdminEntity>
    ) {}

    async execute(id: string): Promise<void> {
        const admin = await this.adminsRepository.findOne({ where: { id }});
        if(!admin) {
            throw new NotFoundException("Admin is not found");
        }
        await this.adminsRepository.delete(id);
    }
};