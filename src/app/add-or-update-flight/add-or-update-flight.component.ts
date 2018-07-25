import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-add-or-update-flight',
  templateUrl: './add-or-update-flight.component.html',
  styleUrls: ['./add-or-update-flight.component.css']
})
export class AddOrUpdateFlightComponent implements OnInit {

  @Output() flightCreated = new EventEmitter<any>();
  @Input() flightInfo: any;

  public buttonText = 'Save';

  constructor() {
    this.clearFlightInfo();
  }

  ngOnInit() {

  }

  private clearFlightInfo = function() {
    // Create an empty jogging object
    this.flightInfo = {
      id: undefined,
      departureFrom: '',
      timeOfDeparture: '',
      destination: '',
      arrivalTime: ''
    };
  };

  public addFlight(flightInfo: any) {
    this.flightCreated.emit(this.flightInfo);
    this.clearFlightInfo();
  }
}
