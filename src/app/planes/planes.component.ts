import { Component, OnInit } from '@angular/core';
import { Plane } from '../shared/models/plane';
import { PlanesService } from '../shared/services/planes.service';
import { Router } from '../../../node_modules/@angular/router';
import { PlaneType } from '../shared/models/planetype';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {

  public planes: Plane[];
  public newPlane: Plane;

  public formMistake: string;

  constructor(private planeService: PlanesService, private router: Router) { 
    this.formMistake = "";
    this.restoreData();
    this.newPlane = new Plane();
    this.newPlane.planeType = new PlaneType();
  }

  private restoreData(){
    this.planeService.get().subscribe((data: Plane[]) => this.planes = data);
  }

  ngOnInit() {

  }

  public addRecord(newPlane: Plane){

    let insertPlane = Object.assign({}, newPlane);
    if((this.formMistake = this.planeService.validatePlane(newPlane)) == "no"){
    this.planeService.add(insertPlane).subscribe(
      HttpInfo => {
        this.restoreData();
        this.formMistake = "no";
      }, err => {
        this.formMistake = "Values not match with database";
      });
    }
  }

  public deleteRecord(id: Number){
    this.planeService.remove(id).subscribe(
      HttpInfo => {
    this.restoreData();
   });   
  }
  public editRecord(Plane: Plane){
    let url = 'plane-details/' + Plane.id; 
    this.router.navigateByUrl(url);
  }
};