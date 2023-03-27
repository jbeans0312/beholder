import React from 'react';
import '../App.css';
import { GetClassProficiencies } from '../util/GetClassQuery';

function App() {
    return (
        <div className="App" style={{minHeight: '100vh'}}>
            <div className="row" style={{minHeight: '95vh'}}>
                <div className="col" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <h1 className="display-1" style={{textDecoration: 'italic'}}>Beholder</h1>
                        {GetClassProficiencies('Ranger')}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
