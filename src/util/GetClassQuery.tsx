import { gql, useQuery } from '@apollo/client';
import { Class, Proficiency} from '../gql/graphql';
import React from 'react';

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

export function GetClassProficiencies(name: string) {
    const {loading, error, data} = useQuery(QUERY_CLASS_BY_INDEX, {variables: {name}});

    if(loading) return null;
    if(error || data === undefined) return (
        <p>
            Error
        </p>
    );

    return(
        <>
            <ol>
                {data.classes.map((entry: Class) => entry.proficiencies.map((prof: Proficiency)=>
                    <li key={prof.index}>{prof.name}</li>
                ))}
            </ol>
        </>
    );
}