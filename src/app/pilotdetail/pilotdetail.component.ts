import { Component, OnInit } from '@angular/core';
import { Pilot } from '../shared/models/pilot';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { PilotsService } from '../shared/services/pilots.service';

@Component({
  selector: 'app-pilotdetail',
  templateUrl: './pilotdetail.component.html',
  styleUrls: ['./pilotdetail.component.css']
})
export class PilotdetailComponent implements OnInit {

  public pilot: Pilot;
  public formMistake: string;

  constructor(private route: ActivatedRoute, private pilotService: PilotsService) { 
    this.pilot = new Pilot();
    this.formMistake = "";
    this.route.params.subscribe( params =>{
      pilotService.getById(params.id).subscribe((data: Pilot) => {
        this.pilot = data;
      });
    });
  }

   public saveEditing(pilot: Pilot){
    if((this.formMistake = this.pilotService.validatePilot(pilot)) == "no"){
    let copy = Object.assign({}, pilot);
    this.pilotService.update(copy).subscribe(
      HttpInfo => {
        this.formMistake = "no";
      }, err => {
        this.formMistake = "Values not match with database";
      });
    }
  }

  ngOnInit() {
  }

}