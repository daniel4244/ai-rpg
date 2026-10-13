import { IsNotEmpty, IsString } from "class-validator";

export class CreateCharacterDraftDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  raceId!: string;

  @IsString()
  @IsNotEmpty()
  classId!: string;

  @IsString()
  @IsNotEmpty()
  backgroundId!: string;
}
