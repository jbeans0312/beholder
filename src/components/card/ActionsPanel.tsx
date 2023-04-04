import React from 'react';
import { Character } from '../../interfaces/character';
import { SpellAction, WeaponAction } from '../../util/GetActionsQuery';

/**
 * The ActionsPanel element displays all the different actions a character can take
 * There will be two sections: weapons, and spells
 * By default they will display the name, range, and damage of the action
 * onClick they will display a description of the action along with any other important information
 * 
 * @param character 
 * @returns ActionsPanel JSX
 */
export function ActionsPanel(character: Character): JSX.Element {
    return(
        <div>
            <h2>Weapons</h2>
            {character.weapons.map((weapon: string)=>
                <div key={weapon}>
                    {WeaponAction(weapon)}
                </div>
            )}
            <h2>Cantrips</h2>
            {character.cantrips.map((cantrip: string)=>
                <div key={cantrip}>
                    {SpellAction(cantrip)}
                </div>
            )}
            <h2>Spells</h2>
            {character.spells.map((spell: string)=>
                <div key={spell}>
                    {SpellAction(spell)}
                </div>
            )}
        </div>
    );
}