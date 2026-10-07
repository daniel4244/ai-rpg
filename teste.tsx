//import models
import { Character } from "./models/character";
import { Enemy } from "./models/enemy";

//import game
import {
  takeDamage,
  meleeAttackRoll,
  rangedAttackRoll,
  receiveHealing,
} from "./game/combat";

const character: Character = {
  name: "daniel",
  ac: 15,
  hp: 30,
  maxHp: 30,
  initiative: 10,
  atkMelee: 5,
  atkRanged: 3,
};

const enemy: Enemy = {
  name: "teste",
  hp: 20,
  maxHp: 20,
  ac: 10,
  initiative: 8,
  atkMelee: 4,
  atkRanged: 2,
};

const normalDamage = 5;
const normalHeal = 3;

console.log("Before taking damage:", character.hp);
console.log("You took damage:", normalDamage);
const damagedHp = takeDamage(character, normalDamage);

console.log("After taking damage:", damagedHp);

console.log("You received healing:", normalHeal);
const healedHp = receiveHealing(character, normalHeal);
console.log("After receiving healing:", healedHp);

console.log("Rolling for attack...");
const characterMeleeAttack = meleeAttackRoll(character);
console.log("Attack roll: ", characterMeleeAttack);
