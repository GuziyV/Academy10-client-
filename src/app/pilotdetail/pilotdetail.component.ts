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

  constructor(private route: ActivatedRoute, private pilotService: PilotsService) { 
    this.pilot = new Pilot();
    this.route.params.subscribe( params =>{
      pilotService.getById(params.id).subscribe((data: Pilot) => {
        this.pilot = data;
      });
    });
  }

   public saveEditing(pilot: Pilot){
    let copy = Object.assign({}, pilot);
    this.pilotService.update(copy).subscribe(
      HttpInfo => HttpInfo,
      err => alert("Wrong input"));
  }

  ngOnInit() {
  }

}