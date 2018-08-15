import { Injectable } from '@angular/core';
import { Die } from './shared/models/die';
import { ScoreSet } from './shared/models/score-set';

@Injectable({
  providedIn: 'root'
})

// a service for scoring turns
export class ScoringService {

  constructor() { }

  score(dice: Array<Die>): number {
    var result = 0;
    if (!dice || dice.length < 1 ){
      throw "invalid dice";
    }
    var numberOfDice = dice.length;

    if (numberOfDice == 5){
      return this.checkForStraight();
    }
    else if (numberOfDice == 3 || numberOfDice == 4){
      this.checkForSets();
    }
    else {
      result = this.scoreIndividually(dice);
      // check for individuals
    }
    
    return result;
  }

  checkForStraight(): number { 
    return 1000;
  }

  checkForSets(): number {
    return 500;
  }

  scoreIndividually(dice: Array<Die>): number {
    var result = 0;
    for (let die of dice){
      switch (die.face){
        case 1:
          return 100;
        case 5:
          return 50;
        default:
          return 0;
      }
    }
    return 0;
  }
}
