import { Stewardess } from "./stewardess";
import { Pilot } from "./pilot";

export class Crew{
    public id: number;
    public pilot: Pilot;
    public stewardesses: Stewardess[];
}