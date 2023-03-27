import { Class } from '../gql/graphql';

/** All data necessary to represent a character in DnD */
export interface Character {
    name: string;
    class: Class;

}