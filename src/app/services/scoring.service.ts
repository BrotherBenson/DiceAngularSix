import { Injectable } from '@angular/core';
import { Die } from '../shared/models/die';
import { ScoreSet } from '../shared/models/score-set';

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
    var faces = this.getDiceFaces(dice);
    var numberOfDice = faces.length;

    if (numberOfDice == 5){
      return this.checkForStraight(dice);
    }
    else if (numberOfDice == 3 || numberOfDice == 4){
      this.checkForSets(dice);
    }
    else {
      result = this.scoreIndividually(dice);
      // check for individuals
    }
    
    return result;
  }

  checkForStraight(dice: Array<Die>): number { 
    var asNumbers = this.getDiceFaces(dice);
  
    return 1000;
  }

  checkForSets(dice: Array<Die>): number {
    var asNumbers = this.getDiceFaces(dice);

    for(var checkValue = 1; checkValue < 7; checkValue++){
      var count = 0;
      for (let die of dice){
        if (die.face === checkValue){
          count++;
        }
      }
      if (count >= 3){
        this.scoreSet(checkValue);
      }
    }

    return 500;
  }

  scoreSet(checkValue: number): number {
    if (checkValue == null){
      throw 'invalid checkValue -- null';
    }

    switch(checkValue){
      case 1: 
        return 1000;
      case 2: 
        return 200;
      case 3: 
        return 300;
      case 4: 
        return 400;
      case 5: 
        return 500;
      case 6: 
        return 600;
      default: throw 'invalid checkValue -- not a dice number';
    }
  }

  scoreIndividually(dice: Array<Die>): number {
    var asNumbers = this.getDiceFaces(dice);

    var result = 0;
    for (let number of asNumbers){
      switch (number){
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

  getDiceFaces(dice: Array<Die>): Array<number> {
    var results = [];

    for (let die of dice){
      results.push(die.face);
    }

    return results;
  }
}
