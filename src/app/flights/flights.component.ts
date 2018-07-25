import { Component, OnInit, NgModule } from '@angular/core';
import { AirportService } from '../shared/airport.service';
import { Flight } from '../shared/models/flight';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})

export class FlightsComponent implements OnInit {

  public flights: Flight[];
  public newFlight: Flight;

  constructor(private airportService: AirportService) { 
    airportService.get('flights').subscribe((data: Flight[]) => this.flights = data);
    this.newFlight = new Flight();
  }

  ngOnInit() {

  }

  public addFlight(newFlight: Flight){
    let insertFlight = Object.assign({}, newFlight);
    this.airportService.add("flights", insertFlight).subscribe(
      flightRecord => {
        insertFlight.number = this.flights[this.flights.length-1].number+1;
        this.flights.push(insertFlight);
      });
  }

  public deleteRecord(number: Number){
    this.airportService.remove("flights", number).subscribe(
      flightRecord => {
    this.flights = this.flights.filter(f => f.number != number)
  });   
  }

  public editRecord(flight: Flight){
    
  }

};
