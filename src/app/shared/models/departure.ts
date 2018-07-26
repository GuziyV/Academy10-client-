import { Flight } from "./flight";
import { Crew } from "./crew";
import { Plane } from "./plane";

export class Departure{
    public id: number;
    public timeOfDeparture: Date;
    public flight: Flight;
    public crew: Crew;
    public plane: Plane;
}