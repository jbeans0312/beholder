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
    const [currentHp, incrementHp] = useState(character.maxHp);
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
            <div className='bar'>
                <div className='option' onClick={showStat}>
                    <i className='gg-girl'></i>
                    <span>stat.</span>
                </div>
                <div className='option' onClick={showProf}>
                    <i className='gg-awards'></i>
                    <span>prof.</span>
                </div>
                <div className='option' onClick={showAct}>
                    <i className='gg-dice-3'></i>
                    <span>act.</span>
                </div>
            </div>
            <hr className='solid'></hr>
            {stat && <StatsPanel character={character} currentHp={currentHp} incrementHp={incrementHp}></StatsPanel>}
            {prof && <ProficienciesPanel character={character}></ProficienciesPanel>}
            {act && <ActionsPanel character={character}></ActionsPanel>}
        </div>
    );
}