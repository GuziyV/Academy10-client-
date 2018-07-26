import { TestBed, inject } from '@angular/core/testing';

import { CrewsService } from './crews.service';

describe('CrewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrewsService]
    });
  });

  it('should be created', inject([CrewsService], (service: CrewsService) => {
    expect(service).toBeTruthy();
  }));
});
