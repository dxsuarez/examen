import { TestBed, inject } from '@angular/core/testing';

import { ActoresService } from './actores.service';

describe('ActoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActoresService]
    });
  });

  it('should be created', inject([ActoresService], (service: ActoresService) => {
    expect(service).toBeTruthy();
  }));
});
