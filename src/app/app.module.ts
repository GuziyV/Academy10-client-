import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {  SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { FlightsComponent } from './flights/flights.component';
import { CrewsComponent } from './crews/crews.component';
import { DepartureComponent } from './departures/departures.component';
import { PilotsComponent } from './pilots/pilots.component';
import { PlanesComponent } from './planes/planes.component';
import { PlaneTypesComponent } from './planetypes/planetypes.component';
import { StewardessesComponent } from './stewardesses/stewardesses.component';
import { TicketsComponent } from './tickets/tickets.component';


import { FlightdetailComponent } from './flightdetail/flightdetail.component';
import { CrewdetailComponent } from './crewdetail/crewdetail.component';
import { DeparturedetailComponent } from './departuredetail/departuredetail.component';
import { PilotdetailComponent } from './pilotdetail/pilotdetail.component';
import { PlanedetailComponent } from './planedetail/planedetail.component';
import { PlanetypedetailComponent } from './planetypedetail/planetypedetail.component';
import { TicketdetailComponent } from './ticketdetail/ticketdetail.component';
import { StewardessdetailComponent } from './stewardessdetail/stewardessdetail.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/flights', pathMatch: 'full' },
  { path: 'flights', component: FlightsComponent },
  { path: 'flight-details/:id', component: FlightdetailComponent},
  { path: 'crews', component: CrewsComponent },
  { path: 'crew-details/:id', component: CrewdetailComponent},
  { path: 'departures', component: DepartureComponent },
  { path: 'departure-details/:id', component: DeparturedetailComponent},
  { path: 'pilots', component: PilotsComponent },
  { path: 'pilot-details/:id', component: PilotdetailComponent},
  { path: 'planes', component: PlanesComponent },
  { path: 'plane-details/:id', component: PlanedetailComponent},
  { path: 'planetypes', component: PlanesComponent },
  { path: 'planetype-details/:id', component: PlanetypedetailComponent},
  { path: 'stewardesses', component: StewardessesComponent },
  { path: 'stewardess-details/:id', component: StewardessdetailComponent},
  { path: 'tickets', component: TicketsComponent },
  { path: 'ticket-details/:id', component: TicketdetailComponent},
  
 
];


@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    CrewsComponent,
    DepartureComponent,
    PilotsComponent,
    PlanesComponent,
    PlaneTypesComponent,
    StewardessesComponent,
    TicketsComponent,
    FlightdetailComponent,
    CrewdetailComponent,
    DeparturedetailComponent,
    PilotdetailComponent,
    PlanedetailComponent,
    PlanetypedetailComponent,
    TicketdetailComponent,
    StewardessdetailComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    SharedModule.forRoot(),
    FormsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
