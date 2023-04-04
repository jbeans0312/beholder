import { gql, useQuery } from '@apollo/client';
import { Spell, Weapon} from '../gql/graphql';
import React from 'react';
import '../components/card/css/Actions.css';

export const QUERY_SPELL_BY_INDEX = gql`
    query SpellByIndex($index: String!){
        spells(index: $index) {
            desc
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

export function SpellAction(index: string): JSX.Element {
    const {loading, error, data} = useQuery(QUERY_SPELL_BY_INDEX, {variables: {index}});
    console.log(index);
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
            
            <span>{data.spell.name}</span>

            <span>{data.spell.desc[0]}</span>

            <span>{data.spell.range}</span>
        </div>
        
    );
}