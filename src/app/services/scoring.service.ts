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

    var numberArray = this.convertToNumberArray(dice);
    return this.scoreNumbers(numberArray);
  }

  convertToNumberArray(dice: Array<Die>): Array<number> {
    var array = _.pluck(dice, 'face');
    array = _.sortBy(array, function(num){num});
    return array;
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
    }
  }

  checkForStraight(dice: Array<number>): number {   
    if (dice == [1,2,3,4,5]){
      return 500;
    }
    if (dice == [2,3,4,5,6]){
      return 1000;
    }
  }

  checkForSets(dice: Array<number>): number {
    var result = 0;
    var setArray = _.groupBy(dice, function(num){return num;});
    _.each(setArray, function(group){
      if (group.length >= 3){
        var num = group[0];
        result = this.scoreSet(num);
        var remainderArray = this.removeSet(group, dice);
        return result + this.scoreIndividually(remainderArray);
      }
    })

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
      if (number == 1){
        result = result + 100;
      }
      else if (number == 5){
        result = result + 50;
      }
    }
    return result;
  }
}
