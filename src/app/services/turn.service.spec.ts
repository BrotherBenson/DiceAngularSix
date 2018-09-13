import { TestBed, inject } from '@angular/core/testing';

import { TurnService } from './turn.service';

describe('TurnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TurnService]
    });
  });

  it('should be created', inject([TurnService], (service: TurnService) => {
    expect(service).toBeTruthy();
  }));

  // rolling 100 with 50 points total score is a bust
  // rolling no fives, ones, straights, or sets is a bust
});
