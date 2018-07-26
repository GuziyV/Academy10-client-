import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsService } from './services/flights.service';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { PlanesService } from './services/planes.service';
import { PilotsService } from './services/pilots.service';
import { PlanetypesService } from './services/planetypes.service';
import { StewardessesService } from './services/stewardesses.service';
import { TicketsService } from './services/tickets.service';
import { CrewsService } from './services/crews.service';
import { DeparturesService } from './services/departures.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [FlightsService, PlanesService, PilotsService, PlanetypesService, StewardessesService, 
  TicketsService, CrewsService, DeparturesService ],
  declarations: [MenuComponent],
  exports: [MenuComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ FlightsService ],
    };
  }
 }
