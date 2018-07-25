import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:43412/api/';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public get(type: string) {
    return this.http.get(this.accessPointUrl + type, {headers: this.headers});
  }

  public add(type: string, entity) {
    return this.http.post(this.accessPointUrl + type, entity, {headers: this.headers});
  }

  public remove(type: string, id: Number) {
    let uri = this.accessPointUrl + type + '/' + id;
    return this.http.delete(this.accessPointUrl + type + '/' + id, {headers: this.headers});
  }

  public update(type: string, entity) {
    return this.http.put(this.accessPointUrl + type + '/' + entity.id, entity, {headers: this.headers});
  }
}
