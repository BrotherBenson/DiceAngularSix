import { TestBed, inject } from '@angular/core/testing';

import { ScoringService } from './scoring.service';

describe('ScoringService', () => {
  let service: ScoringService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScoringService]
    });
    service = new ScoringService();
  });

  it('should be created', inject([ScoringService], (service: ScoringService) => {
    expect(service).toBeTruthy();
  }));

  // scoring singulars
  it('1x1 should return 100', () => {
    var numbers = [1];
    expect(service.scoreNumbers(numbers)).toBe(100);
  });

  it('1x5 should return 50', () => {
    var numbers = [5];
    expect(service.scoreNumbers(numbers)).toBe(50);
  });

  // pairs
  it('2x1 should return 200', () => {
    var numbers = [1,1];
    expect(service.scoreNumbers(numbers)).toBe(200);
  });

  it('2x5 should return 100', () => {
    var numbers = [5,5];
    expect(service.scoreNumbers(numbers)).toBe(100);
  });

  // scoring sets
  it('3x1 should return 1000', () => {
    var numbers = [1,1,1];
    expect(service.scoreNumbers(numbers)).toBe(1000);
  });

  it('3x5 should return 500', () => {
    var numbers = [5,5,5];
    expect(service.scoreNumbers(numbers)).toBe(500);
  });

  // scoring combos (singulars and sets)
  it('4x1 should return 1100', () => {
    var numbers = [1,1,1,1];
    expect(service.scoreNumbers(numbers)).toBe(1100);
  });

  it('5x1 should return 1200', () => {
    var numbers = [1,1,1,1,1];
    expect(service.scoreNumbers(numbers)).toBe(1200);
  });

  it('4x5 should return 550', () => {
    var numbers = [5,5,5,5];
    expect(service.scoreNumbers(numbers)).toBe(550);
  });

  it('5x5 should return 600', () => {
    var numbers = [5,5,5,5,5];
    expect(service.scoreNumbers(numbers)).toBe(600);
  });

  // mixed scoring sets
  it('3x1 2x5 should return 1100', () => {
    var numbers = [1,1,1,5,5];
    expect(service.scoreNumbers(numbers)).toBe(1100);
  });

  it('4x1 1x5 should return 1150', () => {
    var numbers = [1,1,1,1,5];
    expect(service.scoreNumbers(numbers)).toBe(1150);
  });

  it('3x2 2x1 should return 1100', () => {
    var numbers = [1,1,2,2,2];
    expect(service.scoreNumbers(numbers)).toBe(400);
  });

  // straights
  it('low straight should score 500', () => {
    var numbers = [1,2,3,4,5];
    expect(service.scoreNumbers(numbers)).toBe(500);
  });

  it('high straight should score 1000', () => {
    var numbers = [2,3,4,5,6];
    expect(service.scoreNumbers(numbers)).toBe(1000);
  });
});
