import { Component, OnInit } from '@angular/core';
import { Plane } from '../shared/models/plane';
import { PlanesService } from '../shared/services/planes.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {

  public planes: Plane[];
  public newPlane: Plane;

  constructor(private planeService: PlanesService, private router: Router) { 
    this.restoreData();
    this.newPlane = new Plane();
  }

  private restoreData(){
    this.planeService.get().subscribe((data: Plane[]) => this.planes = data);
  }

  ngOnInit() {

  }

  public addRecord(newPlane: Plane){
    let insertPlane = Object.assign({}, newPlane);
    this.planeService.add(insertPlane).subscribe(
      HttpInfo => {
        this.restoreData();
      });
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