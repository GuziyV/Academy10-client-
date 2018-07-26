import { TestBed, inject } from '@angular/core/testing';

import { PlanetypesService } from './planetypes.service';

describe('PlanetypesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanetypesService]
    });
  });

  it('should be created', inject([PlanetypesService], (service: PlanetypesService) => {
    expect(service).toBeTruthy();
  }));
});
