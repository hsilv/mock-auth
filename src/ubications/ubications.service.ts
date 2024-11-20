import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUbicationDto } from './dto/create-ubication.dto';
import { UpdateUbicationDto } from './dto/update-ubication.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ubication } from './entities/ubication.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UbicationsService {
  constructor(
    @InjectRepository(Ubication)
    private readonly ubicationsRepository: Repository<Ubication>,
  ) {}

  async create(createUbicationDto: CreateUbicationDto) {
    return await this.ubicationsRepository.save(createUbicationDto);
  }

  async findAll() {
    return await this.ubicationsRepository.find();
  }

  async findOne(id: number) {
    const ubication = await this.ubicationsRepository.findOneBy({ id });
    if (!ubication) {
      throw new NotFoundException(`Ubication with id ${id} not found`);
    }
    return ubication;
  }

  async update(id: number, updateUbicationDto: UpdateUbicationDto) {
    const ubication = await this.ubicationsRepository.update(
      id,
      updateUbicationDto,
    );
    if (!ubication) {
      throw new NotFoundException(`Ubication with id ${id} not found`);
    }
    const updated = await this.ubicationsRepository.findOneBy({ id });
    return updated;
  }

  async remove(id: number) {
    await this.ubicationsRepository.delete(id);
    return { ok: true };
  }
}
