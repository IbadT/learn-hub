import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from 'database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    AdminModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}