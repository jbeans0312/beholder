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

export function StatsPanel({character, currentHp, incrementHp}: {character: Character, currentHp: number, incrementHp: (newHp: number) => void}): JSX.Element {
    

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
               
                <div className='ac'>
                    <i className="gg-shield"></i>
                    <span><strong>{character.ac}</strong></span>
                </div>
                
                <div className='hp'>
                    <div className='hpbar'>
                        <i className="gg-heart"></i>
                        <span>
                            <strong>{currentHp}/{character.maxHp}</strong>
                        </span>
                    </div>
                    
                    <div>
                        <button
                            onClick={() => {
                                if (currentHp < character.maxHp) incrementHp(currentHp + 1);
                            }}
                        >
                            <i className='gg-add'></i>
                        </button>
                        <button
                            onClick={() => {
                                if (currentHp > 0) incrementHp(currentHp - 1);
                            }}
                        >
                            <i className='gg-remove'></i>
                        </button>
                    </div>
                </div>

                <div className='ac'>
                    <i className='gg-awards'></i>
                    <span><strong>+{character.proficiencyBonus}</strong></span>
                </div>
                
                
            </div>
            {/** end vitalsbar */}
        </div>
    );
}
