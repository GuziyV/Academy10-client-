import { Component, OnInit } from '@angular/core';
import { Stewardess } from '../shared/models/stewardess';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { StewardessesService } from '../shared/services/stewardesses.service';

@Component({
  selector: 'app-stewardessdetail',
  templateUrl: './stewardessdetail.component.html',
  styleUrls: ['./stewardessdetail.component.css']
})
export class StewardessdetailComponent implements OnInit {

  public stewardess: Stewardess;
  public formMistake: string;
  constructor(private route: ActivatedRoute, private stewardessService: StewardessesService) { 
    this.formMistake = "";
    this.stewardess = new Stewardess();
    this.route.params.subscribe( params =>{
      stewardessService.getById(params.id).subscribe((data: Stewardess) => {
        this.stewardess = data;
      });
    });
  }


   public saveEditing(stewardess: Stewardess){
    if((this.formMistake = this.stewardessService.validateStewardess(stewardess)) == "no"){
    let copy = Object.assign({}, stewardess);
    this.stewardessService.update(copy).subscribe(
      HttpInfo => {
        this.formMistake = "no";
      }, err => {
        this.formMistake = "No such crew in database";
      });
    }
  }

  ngOnInit() {
  }

}