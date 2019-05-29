import { Dinosaur } from './dinosaur.model';

export interface Park {
    id: number;
    name: string;
    dinosaurs: Dinosaur[];
}