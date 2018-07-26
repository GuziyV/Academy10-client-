import { Component, OnInit } from '@angular/core';
import { Crew } from '../shared/models/crew';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { CrewsService } from '../shared/services/crews.service';

@Component({
  selector: 'app-crewdetail',
  templateUrl: './crewdetail.component.html',
  styleUrls: ['./crewdetail.component.css']
})
export class CrewdetailComponent implements OnInit {

  public crew: Crew;

  constructor(private route: ActivatedRoute, private crewService: CrewsService) { 
    this.crew = new Crew();
    this.route.params.subscribe( params =>{
      crewService.getById(params.id).subscribe((data: Crew) => {
        this.crew = data;
      });
    });
  }

   public saveEditing(crew: Crew){
    let crewWithoutCollections = Object.assign({}, crew);
    crewWithoutCollections.stewardesses = null;
    this.crewService.update(crewWithoutCollections).subscribe(
      HttpInfo => HttpInfo,
      err => alert("Wrong input"));
  }

  ngOnInit() {
  }

}
