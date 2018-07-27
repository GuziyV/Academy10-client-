import { Component, OnInit } from '@angular/core';
import { PlanesService } from '../shared/services/planes.service';
import { Plane } from '../shared/models/plane';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { PlaneType } from '../shared/models/planetype';

@Component({
  selector: 'app-planedetail',
  templateUrl: './planedetail.component.html',
  styleUrls: ['./planedetail.component.css']
})
export class PlanedetailComponent implements OnInit {

  public plane: Plane;
  public formMistake: string;
  constructor(private route: ActivatedRoute, private planeService: PlanesService) { 
    this.formMistake = "";
    this.plane = new Plane();
    this.plane.planeType = new PlaneType();
    this.restoreData();
  }

  public restoreData(){
    this.route.params.subscribe( params =>{
      this.planeService.getById(params.id).subscribe((data: Plane) => {
        this.plane = data;
      });
    });
  }

   public saveEditing(plane: Plane){
    if((this.formMistake = this.planeService.validatePlane(plane)) == "no"){
    let copy = Object.assign({}, plane);
    copy.planeType.id = undefined;
    this.planeService.update(copy).subscribe(
      HttpInfo => {
        this.restoreData();
        this.formMistake = "no";
      }, err => {
        this.formMistake = "Values not match with database";
      });
    }
  }

  ngOnInit() {
  }

}