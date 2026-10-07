import { Character } from "../models/character";
import { Enemy } from "../models/enemy";
import { rollD20 } from "./dice";

export function takeDamage(character: Character, dmgTaken: number): number {
  const newLife = character.hp - dmgTaken;
  if (newLife < 0) {
    character.hp = 0;
    return character.hp;
  }
  character.hp = newLife;
  return character.hp;
}

export function receiveHealing(character: Character, heal: number): number {
  const newLife = character.hp + heal;
  if (newLife > character.maxHp) {
    character.hp = character.maxHp;
    return character.maxHp;
  }
  character.hp = newLife;
  return character.hp;
}

export function meleeAttackRoll(character: Character): number {
  return rollD20(character.atkMelee);
}

export function rangedAttackRoll(character: Character): number {
  return rollD20(character.atkRanged);
}

export function attackResult(character: Character, enemy: Enemy): boolean {
  const test = meleeAttackRoll(character) - enemy.ac;
  if (test >= 0) {
    return true;
  } else {
    return false;
  }
}
