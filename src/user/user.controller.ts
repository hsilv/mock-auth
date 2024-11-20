import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Usuarios')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Crea un nuevo usuario' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({
    status: 201,
    description: 'El usuario fue creado con éxito.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Se obtienen todos los usuarios' })
  @ApiResponse({ status: 200, description: 'Devuelve todos los usuarios' })
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Obtiene un usuario por ID' })
  @ApiParam({ name: 'id', description: 'El ID del usuario' })
  @ApiResponse({ status: 200, description: 'Devuelve el usuario' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado' })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Elimina un usuario por ID' })
  @ApiParam({ name: 'id', description: 'El ID del usuario' })
  @ApiResponse({
    status: 200,
    description: 'El usuario ha sido eliminado con éxito.',
  })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
