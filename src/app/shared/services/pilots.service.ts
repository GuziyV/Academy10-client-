import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Pilot } from '../models/pilot';

@Injectable({
  providedIn: 'root'
})
export class PilotsService {

  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'pilots/';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public getById(id: number) {
    return this.http.get(this.accessPointUrl + id, {headers: this.headers});
  }

  public get() {
    return this.http.get(this.accessPointUrl, {headers: this.headers});
  }

  public add(entity: Pilot) {
    return this.http.post(this.accessPointUrl, entity, {headers: this.headers});
  }

  public remove(id: Number) {
    return this.http.delete(this.accessPointUrl + id, {headers: this.headers});
  }

  public update(entity: Pilot) {
    return this.http.put(this.accessPointUrl + entity.id, entity, {headers: this.headers});
  }
  public validatePilot(pilot: Pilot): string{
    if(pilot.name == undefined || pilot.name =="" || pilot.name.length > 20){
      return "you should enter correct name";
    }
    if(pilot.surname == "" || pilot.surname == undefined || pilot.surname.length > 25){
      return "you should enter correct surname";
    }
    return "no";
  }
}
