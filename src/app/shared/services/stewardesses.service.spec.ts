import { TestBed, inject } from '@angular/core/testing';

import { StewardessesService } from './stewardesses.service';

describe('StewardessesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StewardessesService]
    });
  });

  it('should be created', inject([StewardessesService], (service: StewardessesService) => {
    expect(service).toBeTruthy();
  }));
});
