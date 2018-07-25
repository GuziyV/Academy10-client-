import { Ticket } from "./ticket";

export class Flight{
    public number: number;
    public departureFrom: string;
    public timeOfDeparture: Date;
    public destination: string;
    public arrivlTime: Date;
    public tickets: Ticket[];
}