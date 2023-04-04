import React from 'react';
import './css/CharacterPanel.css';
import { Character } from '../../interfaces/character';

/**
 * The CharacterPanel element is persistant on the Card element 
 * The panel shows the character's icon, its name, its level, and its id
 * The level can be increased or decreased using a pair of buttons
 * 
 * @param character 
 * @returns CharacterPanel JSX element
 */

export function CharacterPanel(character: Character): JSX.Element {
    return(
        <>
            <div className='idContainer'>
                <div className='idNum'>
                    {character.id}
                </div>
            </div>
            <div className='characterPanel'>
                <h1>
                    {character.name}
                </h1>
                <span>
                    {character.race + ' ' + character.class}
                </span>
            </div>
        </>
    );
}