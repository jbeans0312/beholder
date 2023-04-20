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
        <div className='container' style={{minHeight: '100vh'}}>
            <div className="App">
                <div className="row" style={{minHeight: '35vh', display: 'flex', alignContent: 'center', flexDirection: 'column'}}>
                    <h1 className="display-1 mt-5" style={{textDecoration: 'italic'}}>Beholder</h1>
                    <strong>
                        <p>
                            party creator and analysis tool for dnd 5e
                        </p>
                        <p>
                            built on <a href='https://www.dnd5eapi.co/' target='_blank' rel="noreferrer">dnd5eapi.co</a>
                        </p>
                    </strong>
                </div>
                <div className="row" style={{minHeight: '95vh'}}>
                    <div className="col" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap',
                            gap: 'space-evenly'}}>
                            <Card {...testCharacter}></Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
