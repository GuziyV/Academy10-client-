import { Component, OnInit } from '@angular/core';
import { PlaneType } from '../shared/models/planetype';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { PlanetypesService } from '../shared/services/planetypes.service';

@Component({
  selector: 'app-planetypedetail',
  templateUrl: './planetypedetail.component.html',
  styleUrls: ['./planetypedetail.component.css']
})
export class PlanetypedetailComponent implements OnInit {

  public planeType: PlaneType;

  constructor(private route: ActivatedRoute, private planeTypeService: PlanetypesService) { 
    this.planeType = new PlaneType();
    this.route.params.subscribe( params =>{
      planeTypeService.getById(params.id).subscribe((data: PlaneType) => {
        this.planeType = data;
      });
    });
  }

   public saveEditing(planeType: PlaneType){
    let p = Object.assign({}, planeType);
    this.planeTypeService.update(p).subscribe(
      HttpInfo => HttpInfo,
      err => alert("Wrong input"));
  }

  ngOnInit() {
  }

}