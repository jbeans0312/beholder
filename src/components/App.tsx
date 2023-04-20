import React, { useState } from 'react';
import '../App.css';
import { Character } from '../interfaces/character';
import { Card } from './card/Card';
import image from './eyecon.png';

function App() {
    const [pastHome, clickPastHome] = useState(false);
    
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

    const [party, editParty] = useState(Array<Character>(testCharacter));

    return (
        <div className='container' style={{minHeight: '100vh'}}>
            <div className="App">
                {!pastHome && <div className="row" 
                    style={{minHeight: '100vh', backgroundColor: '#FFC3A1',display: 'flex', alignContent: 'center', 
                        justifyContent: 'center', flexDirection: 'column'}}
                    onClick={()=>{
                        clickPastHome(true);
                    }}>
                    <div className='headerContainer'>
                        <img className='headerImage mb-3'src={image}></img> 
                        <h1 className="display-1" style={{textDecoration: 'italic', position: 'absolute'}}>Beholder</h1>   
                    </div>
                    <strong>
                        <p>
                            party creator and analysis tool for dnd 5e
                        </p>
                        <p >
                            built on <a href='https://www.dnd5eapi.co/' target='_blank' rel="noreferrer">dnd5eapi.co</a>
                        </p>
                        <p>
                            ...click to continue
                        </p>
                    </strong>
                </div>}
                {pastHome && <div className="row" style={{minHeight: '80vh'}}>
                    <div className="col" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap',
                            gap: 'space-evenly'}}>
                            {party.map((c: Character) => <Card key={c.name} {...c}></Card>)}
                        </div>
                    </div>
                </div>}
                {pastHome && <div className="row" style={{minHeight: '20vh'}}>
                    <strong>
                        <p className="hoverable" onClick={()=>{
                            clickPastHome(false);
                        }}>
                            back to home...
                        </p>
                        <p>
                            built on <a href='https://www.dnd5eapi.co/' target='_blank' rel="noreferrer">dnd5eapi.co</a>
                        </p>
                    </strong>
                </div>}
            </div>
        </div>
    );
}

export default App;
