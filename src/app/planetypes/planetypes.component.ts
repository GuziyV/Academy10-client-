import { Component, OnInit } from '@angular/core';
import { PlaneType } from '../shared/models/planetype';
import { PlanetypesService } from '../shared/services/planetypes.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-planetypes',
  templateUrl: './planetypes.component.html',
  styleUrls: ['./planetypes.component.css']
})
export class PlaneTypesComponent implements OnInit {

  public planeTypes: PlaneType[];
  public newPlaneType: PlaneType;

  constructor(private planeTypeService: PlanetypesService, private router: Router) { 
    this.restoreData();
    this.newPlaneType = new PlaneType();
  }

  private restoreData(){
    this.planeTypeService.get().subscribe((data: PlaneType[]) => this.planeTypes = data);
  }

  ngOnInit() {

  }

  public addRecord(newPlaneType: PlaneType){
    let insertPlaneType = Object.assign({}, newPlaneType);
    this.planeTypeService.add(insertPlaneType).subscribe(
      HttpInfo => this.restoreData(),
      err => alert("Values not match with database"));
  }

  public deleteRecord(id: Number){
    this.planeTypeService.remove(id).subscribe(
      HttpInfo => {
    this.restoreData();
   });   
  }
  public editRecord(PlaneType: PlaneType){
    let url = 'planetype-details/' + PlaneType.id; 
    this.router.navigateByUrl(url);
  }
};