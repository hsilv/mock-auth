import { Module } from '@nestjs/common';
import { UbicationsService } from './ubications.service';
import { UbicationsController } from './ubications.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ubication } from './entities/ubication.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ubication])],
  exports: [UbicationsService],
  controllers: [UbicationsController],
  providers: [UbicationsService],
})
export class UbicationsModule {}
