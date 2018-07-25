import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { FlightsComponent } from './flights/flights.component';
import { CrewsComponent } from './crews/crews.component';
import { DeparturesComponent } from './departures/departures.component';
import { PilotsComponent } from './pilots/pilots.component';
import { PlanesComponent } from './planes/planes.component';
import { PlanetypesComponent } from './planetypes/planetypes.component';
import { StewardessesComponent } from './stewardesses/stewardesses.component';
import { TicketsComponent } from './tickets/tickets.component';


import { DecimalPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { FlightdetailComponent } from './flightdetail/flightdetail.component';
import { AddOrUpdateFlightComponent } from './add-or-update-flight/add-or-update-flight.component';

const appRoutes: Routes = [
  { path: 'flights', component: FlightsComponent },
  { path: 'crews', component: CrewsComponent },
  { path: 'departures', component: DeparturesComponent },
  { path: 'pilots', component: PilotsComponent },
  { path: 'planes', component: PlanesComponent },
  { path: 'planetypes', component: PlanetypesComponent },
  { path: 'stewardesses', component: StewardessesComponent },
  { path: 'tickets', component: TicketsComponent },
 
];


@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    CrewsComponent,
    DeparturesComponent,
    PilotsComponent,
    PlanesComponent,
    PlanetypesComponent,
    StewardessesComponent,
    TicketsComponent,
    FlightdetailComponent,
    AddOrUpdateFlightComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    SharedModule.forRoot(),
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
