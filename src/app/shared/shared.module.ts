import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirportService } from './airport.service';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [AirportService],
  declarations: [MenuComponent],
  exports: [MenuComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ AirportService ],
    };
  }
 }
