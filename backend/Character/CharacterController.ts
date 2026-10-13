import { Body, Controller, Post } from "@nestjs/common";
import { CreateCharacterDraftDto } from "./dto/CreateCharacterDraftDto.js";
import { CharacterService } from "./services/CharacterService.js";

@Controller("characters")
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Post()
  create(@Body() createCharacterDto: CreateCharacterDraftDto) {
    return this.characterService.create(createCharacterDto);
  }
}
