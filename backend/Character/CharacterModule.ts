import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { CharacterDraft } from "./entity/CharacterDraft.js";
import { CharacterController } from "./CharacterController.js";
import { CharacterService } from "./services/CharacterService.js";

@Module({
  imports: [TypeOrmModule.forFeature([CharacterDraft])],
  controllers: [CharacterController],
  providers: [CharacterService],
})
export class CharacterModule {}
