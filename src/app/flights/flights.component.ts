import { Component, OnInit, NgModule } from '@angular/core';
import { AirportService } from '../shared/airport.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})

export class FlightsComponent implements OnInit {

  public flights: Array<any>;
  public newFlight: any;

  constructor(private airportService: AirportService) { 
    airportService.get('flights').subscribe((data: any) => this.flights = data);
    this.newFlight = this.setInitialValuesForFlightData;
  }

  ngOnInit() {

  }

  private setInitialValuesForFlightData () {
    return {      
        departureFrom: '',
        timeOfDeparture: '',
        destination: '',
        arrivalTime: ''
    }
  }

  public addFlight(newFlight: any){
    let insertFlight = Object.assign({}, newFlight);
    this.airportService.add("flights", insertFlight).subscribe(
      flightRecord => {
        insertFlight.number = this.flights[this.flights.length-1].number+1;
        this.flights.push(insertFlight);
      });
  }

  public deleteRecord(number: Number)
  {
    this.airportService.remove("flights", number).subscribe(
      flightRecord => {
    this.flights = this.flights.filter(f => f.number != number)
  });
    
  }

};
