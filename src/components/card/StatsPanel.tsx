import React, { useState } from 'react';
import { Character, AbilityScore } from '../../interfaces/character';
import './css/StatsPanel.css';

/**
 * The stats panel shows all of the character's stats
 * HP can be iterated using a pair of buttons
 * For each skill the skill level, the bonus, and the name will be displayed
 * The proficiency bonus will also be displayed
 * The race and class will also be displayed
 *
 * @param character
 * @returns StatsPanel JSX element
 */

export function getModifier(stat: number) {
    const myStat: number = stat - 10;
    let modifier: number = myStat / 2;

    if (modifier % 1 != 0) {
        modifier -= 0.5;
    }

    return modifier;
}

export function StatsPanel({character}: {character: Character}): JSX.Element {
    const [currentHp, incrementHp] = useState(character.maxHp);

    return (
        <div className='statsPanel'>
            {/** start statbar */}
            <div className='statBar'>
                {character.abilityScores.map((stat: AbilityScore) => (
                    <div key={stat.name} className='stat'>
                        <span>{stat.name}</span>
                        <span>{stat.value}</span>
                        <span style={{ textDecoration: 'underline' }}>
                            {getModifier(stat.value) >= 0 && '+'}
                            {getModifier(stat.value)}
                        </span>
                    </div>
                ))}
            </div>
            {/** end statbar */}
            {/** start vitalsbar */}
            <div className='vitalsBar'>
                <div className='hp'>
                    <span>
                        {currentHp}/{character.maxHp}
                    </span>
                    <div>
                        <button
                            onClick={() => {
                                if (currentHp < character.maxHp) incrementHp(currentHp + 1);
                            }}
                        >
                                +
                        </button>
                        <button
                            onClick={() => {
                                if (currentHp > 0) incrementHp(currentHp - 1);
                            }}
                        >
                               -
                        </button>
                    </div>
                </div>
                <div>
                    <span>AC: {character.ac}</span>
                    <span>P Bonus: {character.proficiencyBonus}</span>
                </div>
            </div>
            {/** end vitalsbar */}
        </div>
    );
}
