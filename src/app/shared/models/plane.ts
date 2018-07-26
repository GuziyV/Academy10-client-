import { PlaneType } from "./planetype";
import { Timestamp } from "../../../../node_modules/rxjs";

export class Plane{
    public id: number;
    public planeType: PlaneType;
    public releaseDate: Date;
}