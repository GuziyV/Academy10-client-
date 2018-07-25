import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flightdetail',
  templateUrl: './flightdetail.component.html',
  styleUrls: ['./flightdetail.component.css']
})
export class FlightdetailComponent implements OnInit {

  @Input() flights: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
