import React from 'react';
import '../App.css';
import { Character } from '../interfaces/character';
import { StatsPanel } from './card/StatsPanel';

function App() {
    const testCharacter: Character = {
        name: 'Testerson Testbane',
        race: 'Human',
        class: 'Monk',
        abilityScores: [
            {name: 'STR', value: 10},
            {name: 'DEX', value: 13},
            {name: 'CON', value: 12},
            {name: 'INT', value: 8},
            {name: 'WIS', value: 11},
            {name: 'CHA', value: 14}
        ],
        proficiencyBonus: 2,
        speed: 30,
        maxHp: 14,
        currHp: 14,
        ac: 15,
        weapons: ['quarterstaff', 'shortbow'],
        cantrips: ['eldritch-blast'],
        spells: [''],
        armor: 'chain-mail'
    };

    return (
        <div className="App" style={{minHeight: '100vh'}}>
            <div className="row" style={{minHeight: '95vh'}}>
                <div className="col" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <h1 className="display-1" style={{textDecoration: 'italic'}}>Beholder</h1>
                        {StatsPanel(testCharacter)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
