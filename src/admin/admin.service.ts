import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { GetAdminsQuery } from './queries';
import { CreateAdminCommand, DeleteAdminCommand } from './commands';
import { AdminEntity } from './entities/admin.entity';



@Injectable()
export class AdminService {
  
  constructor(
    private getAdminsQuery: GetAdminsQuery,
    private createAdminCommand: CreateAdminCommand,
    private deleteAdminCommand: DeleteAdminCommand
  ) {}

  async create(createAdminDto: CreateAdminDto): Promise<AdminEntity> {
    return this.createAdminCommand.execute(createAdminDto)
  }

  async findOne(id: string): Promise<AdminEntity> {
    return this.getAdminsQuery.execute(id);
  }

  async remove(id: string): Promise<void> {
    return this.deleteAdminCommand.execute(id);
  }
}