import { Inject, Injectable } from "@nestjs/common";
import { AdminEntity } from "../entities/admin.entity";
import { ADMIN_REPOSITORY } from "src/constants";

@Injectable()
export class GetAdminsQuery {
    constructor(
        @Inject(ADMIN_REPOSITORY)
        private adminsRepository: typeof AdminEntity
    ) {}

    async execute(id: string): Promise<AdminEntity> {
        return this.adminsRepository.findOne({ where: { id }});
    }
};