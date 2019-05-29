import { Race } from './race.model';

export interface Dinosaur {
    id: number;
    name: string;
    race: Race;
    working: boolean;
}