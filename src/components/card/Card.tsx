import React, { useState } from 'react';
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
    const [stat, toggleStat] = useState(false);
    const [prof, toggleProf] = useState(true);
    const [act, toggleAct] = useState(false);
    // 1 = statsPanel, 2 = proficienciesPanel, 3 = actionsPanel
    const showStat = () => {
        toggleStat(true);
        toggleProf(false);
        toggleAct(false);
    };
    
    const showProf = () => {
        toggleStat(false);
        toggleProf(true);
        toggleAct(false);
    };

    const showAct = () => {
        toggleStat(false);
        toggleProf(false);
        toggleAct(true);
    };

    return(
        <div className='aCard'>
            {CharacterPanel(character)}
            <ul>
                <li onClick={showStat}>STATS</li>
                <li onClick={showAct}>ACTIONS</li>
                <li onClick={showProf}>PROFICIENCIES</li>
            </ul>
            {stat && <StatsPanel character={character}></StatsPanel>}
            {prof && <ProficienciesPanel character={character}></ProficienciesPanel>}
            {act && <ActionsPanel character={character}></ActionsPanel>}
        </div>
    );
}