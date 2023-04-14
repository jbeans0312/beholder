import React from 'react';
import '../App.css';
import { Character } from '../interfaces/character';
import { Card } from './card/Card';

function App() {
    const testCharacter: Character = {
        id: 0,
        name: 'Testerson Testbane',
        race: 'Elf',
        class: 'Monk',
        abilityScores: [
            {name: 'STR', value: 10},
            {name: 'DEX', value: 13},
            {name: 'CON', value: 12},
            {name: 'INT', value: 8},
            {name: 'WIS', value: 11},
            {name: 'CHA', value: 14}
        ],
        proficiencies: ['Weaver\'s Tools'],
        proficiencyBonus: 2,
        speed: 30,
        maxHp: 14,
        ac: 15,
        weapons: ['quarterstaff', 'shortbow'],
        cantrips: ['Eldritch Blast'],
        spells: ['Acid Splash'],
        armor: 'chain-mail'
    };

    return (
        <div className="App" style={{minHeight: '100vh', overflow: 'clip'}}>
            <div className="row" style={{minHeight: '95vh'}}>
                <div className="col" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <h1 className="display-1" style={{textDecoration: 'italic'}}>Beholder</h1>
                        <Card {...testCharacter}></Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
