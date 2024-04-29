import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { DatabaseModule } from 'database/database.module';
import { adminProviders } from './admin.providers';
import { ADMINS_COMMANDS } from './commands';
import { ADMINS_QUERIES } from './queries';

@Module({
  imports: [DatabaseModule],
  controllers: [AdminController],
  providers: [
    AdminService, 
    ...ADMINS_COMMANDS,
    ...ADMINS_QUERIES,
    ...adminProviders
  ],
  exports: [AdminService]
})
export class AdminModule {}
