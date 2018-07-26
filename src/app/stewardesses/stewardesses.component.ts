import { Component, OnInit } from '@angular/core';
import { Stewardess } from '../shared/models/stewardess';
import { StewardessesService } from '../shared/services/stewardesses.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-stewardesses',
  templateUrl: './stewardesses.component.html',
  styleUrls: ['./stewardesses.component.css']
})
export class StewardessesComponent implements OnInit {

  public stewardesses: Stewardess[];
  public newStewardess: Stewardess;

  constructor(private stewardessService: StewardessesService, private router: Router) { 
    this.restoreData();
    this.newStewardess = new Stewardess();
  }

  ngOnInit() {

  }

  private restoreData(){
    this.stewardessService.get().subscribe((data: Stewardess[]) => this.stewardesses = data);
  }

  public addRecord(newStewardess: Stewardess){
    let insertStewardes = Object.assign({}, newStewardess);
    this.stewardessService.add(insertStewardes).subscribe(
      HttpInfo => {
        this.restoreData();
      });
  }

  public deleteRecord(id: Number){
    this.stewardessService.remove(id).subscribe(
      HttpInfo => this.restoreData(),
      err => alert("Wrong input"));
  }
  public editRecord(Stewardess: Stewardess){
    let url = 'stewardess-details/' + Stewardess.id; 
    this.router.navigateByUrl(url);
  }
};