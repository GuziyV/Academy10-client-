import { Component, OnInit } from '@angular/core';
import { PlanesService } from '../shared/services/planes.service';
import { Plane } from '../shared/models/plane';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-planedetail',
  templateUrl: './planedetail.component.html',
  styleUrls: ['./planedetail.component.css']
})
export class PlanedetailComponent implements OnInit {

  public plane: Plane;

  constructor(private route: ActivatedRoute, private planeService: PlanesService) { 
    this.plane = new Plane();
    this.route.params.subscribe( params =>{
      planeService.getById(params.id).subscribe((data: Plane) => {
        this.plane = data;
      });
    });
  }

   public saveEditing(plane: Plane){
    let copy = Object.assign({}, plane);
    this.planeService.update(copy).subscribe(
      HttpInfo => HttpInfo,
      err => alert("Wrong input"));
  }

  ngOnInit() {
  }

}