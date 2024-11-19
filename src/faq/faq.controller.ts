import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FaqService } from './faq.service';
import { CreateFaqDto, FAQ_ENUM } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { FilterByCategoryDto } from './dto/get-faq.dto';

@ApiTags('faq')
@Controller('faq')
export class FaqController {
  constructor(private readonly faqService: FaqService) {}

  @Post()
  create(@Body() createFaqDto: CreateFaqDto) {
    return this.faqService.create(createFaqDto);
  }

  @Get()
  findAll() {
    return this.faqService.findAll();
  }

  @Get('landing')
  findLanding() {
    return this.faqService.findLanding();
  }

  @Get('categories')
  findAllCategories() {
    return this.faqService.findAllCategories();
  }

  @Get('category/:category')
  @ApiParam({
    name: 'category',
    enum: FAQ_ENUM,
    description: 'The category of the FAQ',
  })
  findByCategory(@Param() params: FilterByCategoryDto) {
    return this.faqService.findByCategory(params.category);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.faqService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFaqDto: UpdateFaqDto) {
    return this.faqService.update(+id, updateFaqDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.faqService.remove(+id);
  }
}
