import { Class, Race, Weapon, Spell, Armor } from '../gql/graphql';

/** The six base DND skills 
 *  To calculate modifiers subtract 10 from each score and divide the difference by two,
 *  rounding to nearest 1 or -1
 * */ 
export interface AbilityScores {
    str: number;
    dex: number;
    con: number;
    intel: number;
    wis: number;
    cha: number;
} 

/** All data necessary to represent a character in DnD */
export interface Character {
    name: string;
    race: Race; //race of the character from graphql codegen
    class: Class; //class of character from graphql codegen
    abilityScores: AbilityScores; //the six ability scores stored in an ability scores object
    proficiencyBonus: number; 
    speed: number;
    currHp: number;
    maxHp: number;
    ac: number;
    weapons: Array<Weapon>; //array of weapon objects from graphql codegen
    spells: Array<Spell>; //array of spell objects from graphql codegen
    armor: Armor; //the armor the player is wearing generated from graphql codegen
}