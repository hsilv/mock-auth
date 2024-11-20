import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { FaqService } from './faq.service';
import { CreateFaqDto, FAQ_ENUM } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import {
  ApiBearerAuth,
  ApiParam,
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { FilterByCategoryDto } from './dto/get-faq.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { DeletedFaqResponseDto, FaqResponseDto } from './dto/response-faq.dto';

@ApiTags('Preguntas Frecuentes')
@Controller('faq')
export class FaqController {
  constructor(private readonly faqService: FaqService) {}

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post()
  @ApiOperation({ summary: 'Crear una nueva pregunta frecuente' })
  @ApiCreatedResponse({
    status: 201,
    description: 'La pregunta frecuente ha sido creada exitosamente',
    type: FaqResponseDto,
  })
  create(@Body() createFaqDto: CreateFaqDto) {
    return this.faqService.create(createFaqDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las preguntas frecuentes' })
  @ApiOkResponse({
    status: 200,
    description: 'Retorna todas las preguntas frecuentes',
    type: [FaqResponseDto],
  })
  findAll() {
    return this.faqService.findAll();
  }

  @Get('landing')
  @ApiOperation({
    summary: 'Obtener las preguntas frecuentes de la landing page',
  })
  @ApiOkResponse({
    status: 200,
    description: 'Retorna las preguntas frecuentes de la landing page',
    type: [FaqResponseDto],
  })
  @ApiNotFoundResponse({
    status: 404,
    description: 'No se encontraron preguntas frecuentes en la landing page',
  })
  findLanding() {
    return this.faqService.findLanding();
  }

  @Get('categories')
  @ApiOperation({
    summary: 'Obtener todas las categorías de las preguntas frecuentes',
  })
  @ApiOkResponse({
    status: 200,
    description: 'Retorna todas las categorías de las preguntas frecuentes',
    type: [String],
  })
  findAllCategories() {
    return this.faqService.findAllCategories();
  }

  @Get('category/:category')
  @ApiOperation({
    summary: 'Obtener las preguntas frecuentes por categoría',
  })
  @ApiOkResponse({
    status: 200,
    description: 'Retorna las preguntas frecuentes por categoría',
    type: [FaqResponseDto],
  })
  @ApiNotFoundResponse({
    status: 404,
    description: 'No se encontraron categorías de las preguntas frecuentes',
  })
  @ApiParam({
    name: 'category',
    enum: FAQ_ENUM,
    description: 'La categoría de la pregunta frecuente',
  })
  findByCategory(@Param() params: FilterByCategoryDto) {
    return this.faqService.findByCategory(params.category);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una pregunta frecuente por ID' })
  @ApiOkResponse({
    status: 200,
    description: 'Retorna la pregunta frecuente',
    type: FaqResponseDto,
  })
  @ApiNotFoundResponse({
    status: 404,
    description: 'Pregunta frecuente no encontrada',
  })
  findOne(@Param('id') id: string) {
    return this.faqService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una pregunta frecuente' })
  @ApiOkResponse({
    status: 200,
    description: 'La pregunta frecuente ha sido actualizada exitosamente',
    type: FaqResponseDto,
  })
  @ApiNotFoundResponse({
    status: 404,
    description: 'Pregunta frecuente no encontrada',
  })
  update(@Param('id') id: string, @Body() updateFaqDto: UpdateFaqDto) {
    return this.faqService.update(+id, updateFaqDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una pregunta frecuente' })
  @ApiOkResponse({
    status: 200,
    description: 'La pregunta frecuente ha sido eliminada exitosamente',
    type: DeletedFaqResponseDto,
  })
  remove(@Param('id') id: string) {
    return this.faqService.remove(+id);
  }
}
