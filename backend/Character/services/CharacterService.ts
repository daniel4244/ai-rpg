import { Injectable } from "@nestjs/common";
import { CreateCharacterDraftDto } from "../dto/CreateCharacterDraftDto.js";
import { CharacterDraft } from "../entity/CharacterDraft.js";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CharacterService {
  constructor(
    @InjectRepository(CharacterDraft)
    private readonly characterRepository: Repository<CharacterDraft>,
  ) {}

  async create(
    CreateCharacterDraftDto: CreateCharacterDraftDto,
  ): Promise<CharacterDraft> {
    const newCharacterDraft = this.characterRepository.create(
      CreateCharacterDraftDto,
    );
    return await this.characterRepository.save(newCharacterDraft);
  }
}
