import { Component, OnInit, NgModule } from '@angular/core';
import { Crew } from '../shared/models/crew';
import { Router } from '@angular/router';
import { CrewsService } from '../shared/services/crews.service';
import { Pilot } from '../shared/models/pilot';
import { Stewardess } from '../shared/models/stewardess';
@Component({
  selector: 'app-crews',
  templateUrl: './crews.component.html',
  styleUrls: ['./crews.component.css']
})

export class CrewsComponent implements OnInit {

  public crews: Crew[];
  public newCrew: Crew;
  public formMistake: string;

  constructor(private crewsService: CrewsService, private router: Router) { 
    this.restoreData();
    this.formMistake ="";
    this.newCrew = new Crew();
    this.newCrew.pilot = new Pilot();
    let st = new Stewardess();
    this.newCrew.stewardesses =  [st];
  }

  private restoreData(){
    this.crewsService.get().subscribe((data: Crew[]) => this.crews = data);
  }

  ngOnInit() {

  }

  public addRecord(newCrew: Crew){
    if((this.formMistake = this.crewsService.validateCrew(newCrew)) == "no"){
    let insertCrew = Object.assign({}, newCrew);
    this.crewsService.add(insertCrew).subscribe(
      HttpInfo => {
        this.formMistake = "no";
        this.restoreData();
      }, err => {
        this.formMistake = "Values not match with database";
      });
    }
  }

  public deleteRecord(id: Number){
    this.crewsService.remove(id).subscribe(
      HttpInfo => {
    this.restoreData();
   });   
  }
  public editRecord(crew: Crew){
    let url = 'crew-details/' + crew.id; 
    this.router.navigateByUrl(url);
  }
};
