import { Injectable } from '@angular/core';
import { Die } from '../shared/models/die';
import { ScoreSet } from '../shared/models/score-set';
import { _ } from 'underscore';

@Injectable({
  providedIn: 'root'
})

// a service for scoring turns
export class ScoringService {

  constructor() { }

  score(dice: Array<Die>): number {
    if (!dice || dice.length < 1 ){
      throw "invalid dice";
    }
    var numberArray = this.getDiceFaces(dice);
    return this.scoreNumbers(numberArray);
  }

  getDiceFaces(dice: Array<Die>): Array<number> {
    var results = [];

    for (let die of dice){
      results.push(die.face);
    }

    return results;
  }

  scoreNumbers(dice: Array<number>): number {
    var numberOfDice = dice.length;
    
    if (numberOfDice == 5){
      return this.checkForStraight(dice);
    }
    else if (numberOfDice == 3 || numberOfDice == 4){
      return this.checkForSets(dice);
    }
    else {
      return this.scoreIndividually(dice);
      // check for individuals
    }
  }

  checkForStraight(dice: Array<number>): number {   
    return 1000;
  }

  checkForSets(dice: Array<number>): number {
    var result = 0;
    for(var i = 1; i == 6; i++){
      var count = _.countBy(dice, function(number){
        return number == i;
      })
      if (count >= 3){
        result = this.scoreSet(i);
        var remainderArray = this.removeSet(i, dice);
        result += this.scoreIndividually(remainderArray);
      }
    }
    
    return result;
  }

  removeSet(number: number, inputArray: Array<number>): Array<number> {
    return _.difference(inputArray, [number, number, number]);
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

  scoreIndividually(dice: Array<number>): number {
    var result = 0;
    for (let number of dice){
      switch (number){
        case 1:
          result += 100;
        case 5:
          result += 50;
        default:
          break;
      }
    }
    return result;
  }
}
