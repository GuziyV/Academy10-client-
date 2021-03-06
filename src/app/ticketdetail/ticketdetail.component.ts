import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../shared/services/tickets.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { Ticket } from '../shared/models/ticket';

@Component({
  selector: 'app-ticketdetail',
  templateUrl: './ticketdetail.component.html',
  styleUrls: ['./ticketdetail.component.css']
})
export class TicketdetailComponent implements OnInit {

  public ticket: Ticket;
  public formMistake: string;

  constructor(private route: ActivatedRoute, private ticketService: TicketsService) { 
    this.ticket = new Ticket();
    this.formMistake = "";
    this.route.params.subscribe( params =>{
      ticketService.getById(params.id).subscribe((data: Ticket) => {
        this.ticket = data;
      });
    });
  }


   public saveEditing(ticket: Ticket){
    if(this.ticketService.validateTicket(ticket) == "no"){
    let copy = Object.assign({}, ticket);
    this.ticketService.update(copy).subscribe(
      HttpInfo => {
        this.formMistake = "no";
      }, err => {
        this.formMistake = "No such flight in database";
      });
    }
  }

  ngOnInit() {
  }

}