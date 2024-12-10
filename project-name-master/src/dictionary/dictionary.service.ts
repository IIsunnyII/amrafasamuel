import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateDictionaryDto } from './dto/create-dictionary.dto';
import { UpdateDictionaryDto } from './dto/update-dictionary.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Dictionary } from '@prisma/client';

@Injectable()
export class DictionaryService {
  constructor(private readonly prisma: PrismaService) {}
  async create(dictionary: CreateDictionaryDto): Promise<Dictionary> {
    try {
      return this.prisma.dictionary.create({ data: { ...dictionary } });
    } catch (e) {
      throw new InternalServerErrorException('ERROR', e);
    }
  }

  async findAll(): Promise<Dictionary[]> {
    try {
      return this.prisma.dictionary.findMany();
    } catch (e) {
      throw new InternalServerErrorException('ERROR', e);
    }
  }

  async findOne(id: number): Promise<Dictionary> {
    try {
      const dictionary = await this.prisma.dictionary.findUnique({
        where: { id },
      });
      return dictionary;
    } catch (e) {
      throw new InternalServerErrorException('ERROR', e);
    }
  }

  async update(
    id: number,
    dictionary: UpdateDictionaryDto,
  ): Promise<Dictionary> {
    try {
      const verifyDictionary = await this.findOne(id);
      if (!verifyDictionary) {
        throw new NotFoundException('DICCIONARIO_NO_ENCOTRADO');
      }
      return this.prisma.dictionary.update({
        where: { id },
        data: { ...dictionary },
      });
    } catch (e) {
      throw new InternalServerErrorException('ERROR', e);
    }
  }

  async remove(id: number): Promise<void> {
    try {
      const verifyDictionary = await this.findOne(id);
      if (!verifyDictionary) {
        throw new NotFoundException('DICCIONARIO_NO_ENCOTRADO');
      }
      await this.prisma.dictionary.delete({ where: { id } });
      console.log('DICCIONARIO ELIMINADO');
    } catch (e) {
      throw new InternalServerErrorException('ERROR', e);
    }
  }
}
