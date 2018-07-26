import { TestBed, inject } from '@angular/core/testing';

import { DeparturesService } from './departures.service';

describe('DeparturesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeparturesService]
    });
  });

  it('should be created', inject([DeparturesService], (service: DeparturesService) => {
    expect(service).toBeTruthy();
  }));
});
