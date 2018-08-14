import { Injectable } from '@angular/core';
import { Die } from './models';

@Injectable({
  providedIn: 'root'
})

// a service for scoring turns
export class ScoringService {

  constructor() { }

  score(dice: Array<Die>): number {
  	return 1000;
  }
}
