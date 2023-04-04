import { gql, useQuery } from '@apollo/client';
import { Class, Proficiency, Race} from '../gql/graphql';
import React from 'react';
import '../components/card/css/Proficiencies.css';

export const QUERY_CLASS_BY_INDEX = gql`
    query ClassByIndex($name: String!){
        classes(name: $name) {
            name
            proficiencies {
                index
                name
            }
        }
    }
`;

export const QUERY_RACE_BY_INDEX = gql`
    query RaceByIndex($name: String!){
        races(name: $name){
            name
            starting_proficiencies {
                index
                name
            }
        }
    }
`;

export function ClassProficiencies(name: string): JSX.Element {
    const {loading, error, data} = useQuery(QUERY_CLASS_BY_INDEX, {variables: {name}});


    if(loading) return(
        <span>
            Loading proficiencies from api...
        </span>
    );

    if (error) return(
        <span>
            Error fetching proficiencies...
        </span>
    );

    return(
        <div className='profContainer'>
            <h2>Class Proficiencies</h2>
            {data.classes.map((entry: Class) => entry.proficiencies.map((prof: Proficiency)=>
                <div key={prof.index}>
                    <span>
                        {prof.name}
                    </span>
                </div>
            ))}
        </div>
        
    );
}

export function RaceProficiencies(name: string): JSX.Element {
    const {loading, error, data} = useQuery(QUERY_RACE_BY_INDEX, {variables: {name}});

    if(loading) return(
        <span>
            Loading proficiencies from api...
        </span>
    );

    if (error) return(
        <span>
            Error fetching proficiencies...
        </span>
    );

    return(
        <div className='profContainer'>
            <h2>Race Proficiencies</h2>
            {data.races.map((entry: Race) => entry.starting_proficiencies.map((prof: Proficiency)=>
                <div key={prof.index}>
                    <span>
                        {prof.name}
                    </span>
                </div>
            ))}
        </div>
        
    );
}