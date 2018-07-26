import { Component, OnInit, NgModule } from '@angular/core';
import { FlightsService } from '../shared/services/flights.service';
import { Flight } from '../shared/models/flight';
import { Router } from '@angular/router';
@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})

export class FlightsComponent implements OnInit {

  public flights: Flight[];
  public newFlight: Flight;

  constructor(private flightService: FlightsService, private router: Router) { 
    this.restoreData();
    this.newFlight = new Flight();
  }

  ngOnInit() {

  }

  private restoreData(){
    this.flightService.get().subscribe((data: Flight[]) => this.flights = data);
  }

  public addFlight(newFlight: Flight){
    let insertFlight = Object.assign({}, newFlight);
    this.flightService.add(insertFlight).subscribe(
      http => {
        this.restoreData();
      });
  }

  public deleteRecord(number: Number){
    this.flightService.remove(number).subscribe(
      http => {
    this.restoreData();
   });   
  }
  public editRecord(flight: Flight){
    let url = 'flight-details/' + flight.number; 
    this.router.navigateByUrl(url);
  }
};
