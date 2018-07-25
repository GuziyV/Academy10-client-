import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsService } from './flights.service';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [FlightsService],
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
