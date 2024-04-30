import { CreateAdminCommand } from "./create-admin.command";
import { DeleteAdminCommand } from "./delete-admin.command";

export * from './create-admin.command'
export * from './delete-admin.command'

export const ADMINS_COMMANDS = [CreateAdminCommand, DeleteAdminCommand];