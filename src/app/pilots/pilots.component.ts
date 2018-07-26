import { Component, OnInit } from '@angular/core';
import { Pilot } from '../shared/models/pilot';
import { PilotsService } from '../shared/services/pilots.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.css']
})
export class PilotsComponent implements OnInit {

  public pilots: Pilot[];
  public newPilot: Pilot;

  constructor(private pilotservice: PilotsService, private router: Router) { 
    this.restoreData();
    this.newPilot = new Pilot();
  }

  ngOnInit() {

  }

  private restoreData(){
    this.pilotservice.get().subscribe((data: Pilot[]) => this.pilots = data);
  }

  public addRecord(newPilot: Pilot){
    let inserPilot = Object.assign({}, newPilot);
    this.pilotservice.add(inserPilot).subscribe(
      HttpInfo => {
        this.restoreData();
      });
  }

  public deleteRecord(id: Number){
    this.pilotservice.remove(id).subscribe(
      HttpInfo => {
    this.restoreData();
   });   
  }
  public editRecord(Pilot: Pilot){
    let url = 'pilot-details/' + Pilot.id; 
    this.router.navigateByUrl(url);
  }
};
