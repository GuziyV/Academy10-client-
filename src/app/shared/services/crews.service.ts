import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Crew } from '../models/crew';
import { PilotsService } from './pilots.service';
import { StewardessesService } from './stewardesses.service';

@Injectable({
  providedIn: 'root'
})
export class CrewsService {

  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'crews/';

  constructor(private http: HttpClient, private pilotService: PilotsService, private stewardessService: StewardessesService) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public getById(id: number) {
    return this.http.get(this.accessPointUrl + id, {headers: this.headers});
  }

  public get() {
    return this.http.get(this.accessPointUrl, {headers: this.headers});
  }

  public add(entity: Crew) {
    return this.http.post(this.accessPointUrl, entity, {headers: this.headers});
  }

  public remove(id: Number) {
    return this.http.delete(this.accessPointUrl + id, {headers: this.headers});
  }

  public update(entity: Crew) {
    return this.http.put(this.accessPointUrl + entity.id, entity, {headers: this.headers});
  }
  public validateCrew(crew: Crew): string{
    let error: string;
    if((error = this.pilotService.validatePilot(crew.pilot)) != "no"){
      return error;
    }
    for(let i = 0;i < crew.stewardesses.length;i++)
    if((error = this.stewardessService.validateStewardess(crew.stewardesses[i])) != "no" && error != "you should enter correct crewId"){
      return error;
    }
    return "no";
  }
}
