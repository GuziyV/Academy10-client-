import { TestBed, inject } from '@angular/core/testing';

import { FlightsService } from './flights.service';

describe('AirportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlightsService]
    });
  });

  it('should be created', inject([FlightsService], (service: FlightsService) => {
    expect(service).toBeTruthy();
  }));
});
