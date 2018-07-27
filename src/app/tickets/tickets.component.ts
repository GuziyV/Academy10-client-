import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../shared/services/tickets.service';
import { Ticket } from '../shared/models/ticket';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  public tickets: Ticket[];
  public newTicket: Ticket;
  public formMistake: string;

  constructor(private ticketService: TicketsService, private router: Router) { 
    this.restoreData();
    this.newTicket = new Ticket();
    this.formMistake = "";
  }

  ngOnInit() {

  }


  private restoreData(){
    this.ticketService.get().subscribe((data: Ticket[]) => this.tickets = data);
  }

  public addRecord(newTicket: Ticket){
    if(this.ticketService.validateTicket(newTicket) == "no"){
      let insertTicket = Object.assign({}, newTicket);
    this.ticketService.add(insertTicket).subscribe(
      HttpInfo => {
        this.restoreData();
        this.formMistake = "no";
      }, err => {
        this.formMistake = "No such flight in database";
      });
    }
    
  }

  public deleteRecord(id: Number){
    this.ticketService.remove(id).subscribe(
      HttpInfo => this.restoreData());
  }
  public editRecord(Ticket: Ticket){
    let url = 'ticket-details/' + Ticket.id; 
    this.router.navigateByUrl(url);
  }
};