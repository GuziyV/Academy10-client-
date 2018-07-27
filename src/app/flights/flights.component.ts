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
  public formMistake: string;

  constructor(private flightService: FlightsService, private router: Router) { 
    this.restoreData();
    this.formMistake = "";
    this.newFlight = new Flight();
  }

  ngOnInit() {

  }

  private restoreData(){
    this.flightService.get().subscribe((data: Flight[]) => this.flights = data);
  }

  public addFlight(newFlight: Flight){
    if((this.formMistake = this.flightService.validateFlight(newFlight)) == "no"){
    let insertFlight = Object.assign({}, newFlight);
    this.flightService.add(insertFlight).subscribe(
      HttpInfo => {
        this.formMistake = "no";
        this.restoreData();
      }, err => {
        this.formMistake = "Values not match with database";
      });
    }
  }

  public deleteRecord(number: Number){
    this.flightService.remove(number).subscribe(
      HttpInfo => this.restoreData(),
      err => alert("Values not match with database"));
  }
  public editRecord(flight: Flight){
    let url = 'flight-details/' + flight.number; 
    this.router.navigateByUrl(url);
  }
};
