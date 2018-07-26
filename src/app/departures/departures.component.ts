import { Component, OnInit } from '@angular/core';
import { Departure } from '../shared/models/departure';
import { DeparturesService } from '../shared/services/departures.service';
import { Router } from '../../../node_modules/@angular/router';

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
  }

  ngOnInit() {

  }

  private restoreData(){
    this.departureService.get().subscribe((data: Departure[]) => this.departures = data);
  }

  public addRecord(newDeparture: Departure){
    let inserDeparture = Object.assign({}, newDeparture);
    this.departureService.add(inserDeparture).subscribe(
      HttpInfo => {
        this.restoreData();
      });
  }

  public deleteRecord(id: Number){
    this.departureService.remove(id).subscribe(
      HttpInfo => {
    this.restoreData();
   });   
  }
  public editRecord(departure: Departure){
    let url = 'departure-details/' + departure.id; 
    this.router.navigateByUrl(url);
  }
};
