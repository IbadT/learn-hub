import { BadRequestException, Injectable } from "@nestjs/common";
import { AdminEntity } from "../entities/admin.entity";
import { CreateAdminDto } from "../dto/create-admin.dto";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CreateAdminCommand {
    constructor(
        @InjectRepository(AdminEntity)
        private readonly adminsRepository: Repository<AdminEntity>
    ) {}

    async execute(createAdminDto: CreateAdminDto): Promise<AdminEntity> {
        const admin = this.adminsRepository.create(createAdminDto);
        if(!admin) throw new BadRequestException("Something went wrong...");
        await this.adminsRepository.save(admin);
        return admin;
    }
};