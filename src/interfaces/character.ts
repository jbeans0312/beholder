/** The six base DND skills 
 *  To calculate modifiers subtract 10 from each score and divide the difference by two,
 *  rounding to nearest 1 or -1
 * */ 
export interface AbilityScore {
    name: string;
    value: number;
} 

/** All data necessary to represent a character in DnD */
export interface Character {
    name: string;
    race: string; //race of the character from graphql codegen
    class: string; //class of character from graphql codegen
    abilityScores: Array<AbilityScore>; //the six ability scores stored in an ability scores object
    proficiencyBonus: number; 
    speed: number;
    maxHp: number;
    ac: number;
    weapons: Array<string>; //array of weapon objects from graphql codegen
    cantrips: Array<string>;
    spells: Array<string>; //array of spell objects from graphql codegen
    armor: string; //the armor the player is wearing generated from graphql codegen
}