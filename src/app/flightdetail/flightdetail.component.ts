import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Flight } from '../shared/models/flight';
import { AirportService } from '../shared/airport.service';

@Component({
  selector: 'app-flightdetail',
  templateUrl: './flightdetail.component.html',
  styleUrls: ['./flightdetail.component.css']
})
export class FlightdetailComponent implements OnInit {

  public flight: Flight;

  constructor(private route: ActivatedRoute, private flightService: AirportService) { 
    this.flight = new Flight();
    this.route.params.subscribe( params =>{
      flightService.getById(params.id).subscribe((data: Flight) => {
        this.flight = data;
      });
    });
  }

   public saveEditing(flight: Flight){
    let flightWithoutTickets = Object.assign({}, flight);
    flight.tickets = null;
    this.flightService.update(flight).subscribe(
      flightRecord => {
        if(flightRecord.isSuccessStatusCode == false){
          alert("Wrong input");
          return;
        }
      }
    );
  }

  ngOnInit() {
  }

}
