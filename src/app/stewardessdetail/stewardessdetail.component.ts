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

  constructor(private route: ActivatedRoute, private stewardessService: StewardessesService) { 
    this.stewardess = new Stewardess();
    this.route.params.subscribe( params =>{
      stewardessService.getById(params.id).subscribe((data: Stewardess) => {
        this.stewardess = data;
      });
    });
  }

   public saveEditing(stewardess: Stewardess){
    let copy = Object.assign({}, stewardess);
    this.stewardessService.update(copy).subscribe(
      HttpInfo => HttpInfo,
      err => alert("Wrong input"));
  }

  ngOnInit() {
  }

}