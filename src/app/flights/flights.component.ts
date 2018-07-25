import { Component, OnInit, NgModule } from '@angular/core';
import { FlightsService } from '../shared/flights.service';
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
    flightService.get().subscribe((data: Flight[]) => this.flights = data);
    this.newFlight = new Flight();
  }

  ngOnInit() {

  }

  public addFlight(newFlight: Flight){
    let insertFlight = Object.assign({}, newFlight);
    this.flightService.add(insertFlight).subscribe(
      flightRecord => {
        if(flightRecord.isSuccessStatusCode == false){
          alert("Wrong input");
          return;
        }
        insertFlight.number = this.flights[this.flights.length-1].number+1;
        this.flights.push(insertFlight);
      });
  }

  public deleteRecord(number: Number){
    this.flightService.remove(number).subscribe(
      flightRecord => {
    this.flights = this.flights.filter(f => f.number != number)
   });   
  }
  public editRecord(flight: Flight){
    let url = 'flight-details/' + flight.number; 
    this.router.navigateByUrl(url);
  }
};
