import { TestBed, inject } from '@angular/core/testing';

import { RollingService } from './rolling.service';

describe('RollingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RollingService]
    });
  });

  it('should be created', inject([RollingService], (service: RollingService) => {
    expect(service).toBeTruthy();
  }));
});
