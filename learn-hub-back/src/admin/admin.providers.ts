import { AdminEntity } from "./entities/admin.entity";
import { ADMIN_REPOSITORY } from "src/constants";

export const adminProviders = [
    {
        provide: ADMIN_REPOSITORY,
        useValue: AdminEntity
    }
]