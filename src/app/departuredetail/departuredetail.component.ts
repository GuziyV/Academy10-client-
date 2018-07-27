import { Component, OnInit } from '@angular/core';
import { Departure } from '../shared/models/departure';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { DeparturesService } from '../shared/services/departures.service';
import { Plane } from '../shared/models/plane';
import { PlaneType } from '../shared/models/planetype';
import { Crew } from '../shared/models/crew';
import { Flight } from '../shared/models/flight';
import { Pilot } from '../shared/models/pilot';
import { Stewardess } from '../shared/models/stewardess';

@Component({
  selector: 'app-departuredetail',
  templateUrl: './departuredetail.component.html',
  styleUrls: ['./departuredetail.component.css']
})
export class DeparturedetailComponent  {

  public departure: Departure;
  public formMistake: string;

  constructor(private route: ActivatedRoute, private departureService: DeparturesService) { 
    this.departure = new Departure();
    this.departure.plane = new Plane();
    this.departure.plane.planeType = new PlaneType();
    this.departure.crew = new Crew();
    this.departure.flight = new Flight();
    this.departure.crew.pilot = new Pilot();
    this.departure.crew.stewardesses =  [new Stewardess()];
    this.formMistake = "";
    this.restoreData();
  }

  public restoreData(){
    this.route.params.subscribe( params =>{
      this.departureService.getById(params.id).subscribe((data: Departure) => {
        this.departure = data;
      });
    });
  }

   public saveEditing(departure: Departure){
    if((this.formMistake = this.departureService.validateDeparture(departure)) == "no"){
    console.log(departure);
    let copy = Object.assign({}, departure);
    copy.flight.tickets = undefined
    copy.crew.id = undefined;
    copy.crew.stewardesses = [];
    copy.crew.pilot.id = undefined;
    copy.plane.id = undefined;
    copy.plane.planeType.id = undefined;
    copy.flight.number = undefined;

    this.departureService.update(copy).subscribe(
      HttpInfo => {
        this.formMistake = "no";
        this.restoreData();
      }, err => {
        this.formMistake = "Values not match with database";
      });
    }
  }
}