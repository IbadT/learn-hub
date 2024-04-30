import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { ApiTags } from '@nestjs/swagger';
import { CreateAdminApiDocs } from './decorators/create-admin.decorator';
import { GetAdminApiDocs } from './decorators/get-admin.decorator';
import { DeleteAdminApiDocs } from './decorators/delete-admin.decorator';


@ApiTags("admin")
@Controller("admin")
export class AdminController {

  constructor(
    private readonly adminService: AdminService
  ) {}

  @Get(':id')
  @GetAdminApiDocs()
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(id);
  }


  @Post()
  @CreateAdminApiDocs()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }
  

  @Delete(':id')
  @DeleteAdminApiDocs()
  remove(@Param('id') id: string) {
    return this.adminService.remove(id);
  }
}
