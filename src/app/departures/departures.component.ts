import { Component, OnInit } from '@angular/core';
import { Departure } from '../shared/models/departure';
import { DeparturesService } from '../shared/services/departures.service';
import { Router } from '../../../node_modules/@angular/router';
import { Plane } from '../shared/models/plane';
import { Crew } from '../shared/models/crew';
import { Flight } from '../shared/models/flight';
import { Pilot } from '../shared/models/pilot';
import { Stewardess } from '../shared/models/stewardess';
import { PlaneType } from '../shared/models/planetype';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-departures',
  templateUrl: './departures.component.html',
  styleUrls: ['./departures.component.css']
})
export class DepartureComponent implements OnInit {

  public departures: Departure[];
  public newDeparture: Departure;

  constructor(private departureService: DeparturesService, private router: Router) { 
    this.restoreData();
    this.newDeparture = new Departure();
    this.newDeparture.plane = new Plane();
    this.newDeparture.plane.planeType = new PlaneType();
    this.newDeparture.crew = new Crew();
    this.newDeparture.flight = new Flight();
    this.newDeparture.crew.pilot = new Pilot();
    this.newDeparture.crew.stewardesses =  [new Stewardess()];
    
  }

  ngOnInit() {
    
  }

  private restoreData(){
    this.departureService.get().subscribe((data: Departure[]) => {this.departures = data;});
  }

  public addRecord(newDeparture: Departure){
    let inserDeparture = Object.assign({}, newDeparture);
    this.departureService.add(newDeparture).subscribe(
      HttpInfo => {
        this.restoreData();
      });
  }

  public deleteRecord(id: Number){
    this.departureService.remove(id).subscribe(
      HttpInfo => this.restoreData(),
      err => alert("Wrong input")); 
  }
  public editRecord(departure: Departure){
    let url = 'departure-details/' + departure.id; 
    this.router.navigateByUrl(url);
  }
};
