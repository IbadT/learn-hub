import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { ADMINS_COMMANDS } from './commands';
import { ADMINS_QUERIES } from './queries';
import { DatabaseModule } from 'src/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity } from './entities/admin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdminEntity]), DatabaseModule],
  controllers: [AdminController],
  providers: [AdminService, ...ADMINS_COMMANDS, ...ADMINS_QUERIES],
})
export class AdminModule {}
