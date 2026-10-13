import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class CharacterDraft {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  raceId!: string;

  @Column()
  classId!: string;

  @Column()
  backgroundId!: string;

  @CreateDateColumn()
  createdAt!: Date;
}
