import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateDictionaryDto {
  @IsNotEmpty()
  @IsString()
  concept: string;
  @IsNotEmpty()
  @IsString()
  description: string;
  @IsNotEmpty()
  @IsString()
  unity: string;
  @IsNotEmpty()
  @IsString()
  bibliography: string;
  @IsNotEmpty()
  @IsBoolean()
  status: boolean;
}
