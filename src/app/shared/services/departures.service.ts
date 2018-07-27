import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Departure } from '../models/departure';
import { CrewsService } from './crews.service';
import { FlightsService } from './flights.service';
import { PlanesService } from './planes.service';

@Injectable({
  providedIn: 'root'
})
export class DeparturesService {

  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'departures/';

  constructor(private http: HttpClient, private crewService: CrewsService, private flightService: FlightsService, private planeService: PlanesService) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public getById(id: number) {
    return this.http.get(this.accessPointUrl + id, {headers: this.headers});
  }

  public get() {
    return this.http.get(this.accessPointUrl, {headers: this.headers});
  }

  public add(entity: Departure) {
    return this.http.post(this.accessPointUrl, entity, {headers: this.headers});
  }

  public remove(id: Number) {
    return this.http.delete(this.accessPointUrl + id, {headers: this.headers});
  }

  public update(entity: Departure) {
    return this.http.put(this.accessPointUrl + entity.id, entity, {headers: this.headers});
  }
  public validateDeparture(departure: Departure): string{
    let error: string;
    if((error = this.crewService.validateCrew(departure.crew)) != "no"){
      return error;
    }
    if((error = this.flightService.validateFlight(departure.flight)) != "no"){
      return error;
    }
    if((error = this.planeService.validatePlane(departure.plane)) != "no"){
      return error;
    }
    return "no";
  }
}
