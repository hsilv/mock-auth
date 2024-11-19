import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Faq } from './entities/faq.entity';

@Injectable()
export class FaqService {
  constructor(
    @InjectRepository(Faq) private readonly faqRepository: Repository<Faq>,
  ) {}

  create(createFaqDto: CreateFaqDto) {
    return this.faqRepository.save(createFaqDto);
  }

  async findAllCategories() {
    const categories = await this.faqRepository
      .createQueryBuilder()
      .select('DISTINCT categoria')
      .getRawMany();

    return categories.map((category) => category.categoria);
  }

  findAll() {
    return this.faqRepository.find();
  }

  async findOne(id: number) {
    const faq = await this.faqRepository.findOneBy({ id });
    if (!faq) {
      throw new NotFoundException(`Faq with id ${id} not found`);
    }
    return faq;
  }

  async findByCategory(category: string) {
    const faqs = await this.faqRepository.findBy({ categoria: category });
    if (!faqs.length) {
      throw new NotFoundException(`Faqs with category ${category} not found`);
    }
    return faqs;
  }

  async update(id: number, updateFaqDto: UpdateFaqDto) {
    const finded = await this.faqRepository.findOneBy({ id });
    if (!finded) {
      throw new NotFoundException(`Faq with id ${id} not found`);
    }
    await this.faqRepository.update(id, updateFaqDto);
    const updated = await this.faqRepository.findOneBy({ id });
    return updated;
  }

  async findLanding() {
    const faqs = await this.faqRepository.findBy({ inLanding: true });
    console.log(faqs);
    if (!faqs.length) {
      throw new NotFoundException('No faqs in landing');
    }
    return faqs;
  }

  async remove(id: number) {
    await this.faqRepository.delete(id);
    return { ok: true };
  }
}
