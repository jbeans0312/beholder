import { Character } from './character';

export type Party = {
    characters: Array<Character>;
    maxDamage: number;
    maxRange: number;
}
