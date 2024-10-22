import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user: User = new User();
    Object.assign(user, createUserDto);
    try {
      const savedUser = await this.userRepository.save(user);
      return savedUser;
    } catch (error) {
      if (error.code === '23505') {
        // Código de error de constraint de unicidad en PostgreSQL
        throw new BadRequestException(`${error.column} duplicado`);
      } else if (error.code === '23502') {
        throw new BadRequestException(`Entrada para ${error.column} requerida`);
      }
      console.error(error);
      throw new BadRequestException(
        'An error occurred while creating the user',
      );
    }
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(correo: string): Promise<User | null> {
    return this.userRepository.findOneBy({ correo });
  }

  remove(correo: string) {
    return this.userRepository.delete(correo);
  }
}
