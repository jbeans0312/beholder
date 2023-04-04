import React from 'react';
import { Character } from '../../interfaces/character';
import { CharacterPanel } from './CharacterPanel';
import { StatsPanel } from './StatsPanel';
import './css/Card.css';
import { ProficienciesPanel } from './ProficienciesPanel';
import { ActionsPanel } from './ActionsPanel';
/**
 * The Card object holds all of the information to represent a character in the party
 * The top panel displays the ID of the character in the party along with their icon and name
 * The panel at the bottom can be changed between three panels
 * ----------------------
 * Stats Panel: shows all skills, bonuses, hp, ac, and proficiency bonus as well as race and class
 * Actions Panel: shows all actions the player can take
 * Proficiencies Panel: shows all the skills that the character is proficient in, as well as any racial traits
 * ----------------------
 * The three panels can be togeled using a navbar at the bottom of the card
 * 
 * @param character 
 * @returns Card JSX element
 */
export function Card(character: Character): JSX.Element {
    return(
        <div className='aCard'>
            {CharacterPanel(character)}
            {StatsPanel(character)}
            {ProficienciesPanel(character)}
            {ActionsPanel(character)}
        </div>
    );
}