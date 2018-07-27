import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Flight } from '../shared/models/flight';
import { FlightsService } from '../shared/services/flights.service';

@Component({
  selector: 'app-flightdetail',
  templateUrl: './flightdetail.component.html',
  styleUrls: ['./flightdetail.component.css']
})
export class FlightdetailComponent {

  public flight: Flight;
  public formMistake: string;

  constructor(private route: ActivatedRoute, private flightService: FlightsService) { 
    this.flight = new Flight();
    this.formMistake = "";
    this.route.params.subscribe( params =>{
      flightService.getById(params.id).subscribe((data: Flight) => {
        this.flight = data;
      });
    });
  }

   public saveEditing(flight: Flight){
    if((this.formMistake = this.flightService.validateFlight(flight)) == "no"){
    let flightWithoutTickets = Object.assign({}, flight);
    flightWithoutTickets.tickets = null;
    this.flightService.update(flightWithoutTickets).subscribe(
      HttpInfo => {
        this.formMistake = "no";
      }, err => {
        this.formMistake = "Values not match with database";
      });
    }
  }


}
