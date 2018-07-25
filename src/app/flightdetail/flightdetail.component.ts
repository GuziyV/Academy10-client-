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

  public id: number;

  public flight: Flight;

  constructor(private route: ActivatedRoute, private flightService: AirportService) { 
    this.route.params.subscribe( params =>{
      flightService.getById(params.id).subscribe((data: Flight) => {
        this.flight.number = data.number;
        this.flight.destination = data.destination;
      });
    });
  }

  ngOnInit() {
  }

}
