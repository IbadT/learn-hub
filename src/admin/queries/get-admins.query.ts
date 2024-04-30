import { Injectable } from "@nestjs/common";
import { AdminEntity } from "../entities/admin.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class GetAdminsQuery {
    constructor(
        @InjectRepository(AdminEntity)
        private readonly adminsRepository: Repository<AdminEntity>
    ) {}

    async execute(id: string): Promise<AdminEntity> {
        return await this.adminsRepository.findOne({ where: { id }});
        
    }
};