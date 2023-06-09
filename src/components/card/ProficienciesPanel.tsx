import React from 'react';
import { Character } from '../../interfaces/character';
import { ClassProficiencies, RaceProficiencies } from '../../util/GetProficienciesQuery';
import './css/Proficiencies.css';
/**
 * The ProficienciesPanel element displays all of the character's proficiencies as well as any racial traits
 * More proficiencies can be added through a modal
 * Proficiencies and traits can also be clicked on / expanded to show more information
 * 
 * @param character 
 * @returns ProficienciesPanel JSX element
 */

export function ProficienciesPanel({character}: {character: Character}): JSX.Element {
    return(
        <div className='profPanel'>
            {ClassProficiencies(character.class)}
            {RaceProficiencies(character.race)}
            <div className='profContainer'>
                <div className='profHeader'>
                    <i className='gg-girl'></i>
                    <span><strong>Character</strong></span>
                </div>
                {character.proficiencies.map((str: string)=>
                    <div key={str}>
                        <span>{str}</span>
                    </div>)}
            </div>
        </div>
    );
}