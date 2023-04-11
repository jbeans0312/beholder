import { gql, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import '../components/card/css/Actions.css';

export const QUERY_SPELL_BY_INDEX = gql`
    query SpellByIndex($name: String!){
        spells(name: $name) {
            desc,
            range
        }
    }
`;

export const QUERY_WEAPON_BY_INDEX= gql`
    query WeaponByIndex($index: String!){
        equipment(index: $index){
            ...on Weapon{
                name
                damage {
                    damage_dice 
                    damage_type {
                        name
                    }
                }
                range {
                    normal
                    long
                }
            }
        }
    }
`;

export function WeaponAction(index: string): JSX.Element {
    const {loading, error, data} = useQuery(QUERY_WEAPON_BY_INDEX, {variables: {index}});
    console.log(index);
    if(loading) return(
        <span>
            Loading weapon data from api...
        </span>
    );

    if (error) return(
        <span>
            Error fetching weapon data...
        </span>
    );

    return(
        <div className='weaponContainer'>
            
            <span>{data.equipment.name}</span>

            <span>{data.equipment.damage?.damage_dice + ' ' +
             data.equipment.damage?.damage_type.name}</span>

            <span>{'Range: ' + data.equipment.range.normal +
             (data.equipment.range.long ? '/'+data.equipment.range.long : '')}</span>
        </div>
        
    );
}

export function SpellAction(name: string): JSX.Element {
    const {loading, error, data} = useQuery(QUERY_SPELL_BY_INDEX, {variables: {name}});
    console.log(name);
    
    const [expanded, toggleExpand] = useState(false);

    if(loading) return(
        <span>
            Loading spell data from api...
        </span>
    );

    if (error) return(
        <span>
            Error fetching spell data...
        </span>
    );

    return(
        <div className='weaponContainer'>
            {expanded ? 
                <span className='expandTitle' onClick={() => toggleExpand(false)}>{name + ' -'}</span>:
                <span className='expandTitle' onClick={() => toggleExpand(true)}>{name + ' +'}</span>
            }

            {expanded && <span>{data.spells[0].desc[0]}</span>}
            {expanded &&<span>{data.spells[0].range}</span>}
        </div>
        
    );
}
