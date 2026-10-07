//import library
import { Dice } from "dice-typescript";

const dice = new Dice();

export function rollD20(modifier: number): number {
  return dice.roll("1d20+" + modifier).total;
}
