import { Injectable } from '@angular/core';
import { Die } from '../shared/models/die';
import { ScoreSet } from '../shared/models/score-set';
import { GroupedDice } from '../shared/models/groupedDice';
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
      // check for straight, if that's 0, check for sets, if that's 0, check individually.
      return this.checkForStraight(dice) != 0 
        ? this.checkForStraight(dice)
        : this.checkForSets(dice) != 0
          ? this.checkForSets(dice)
          : this.scoreIndividually(dice);
    }
    else if (numberOfDice == 3 || numberOfDice == 4){
      // check for sets, if that's 0, check individually.
      return this.checkForSets(dice) != 0
        ? this.checkForSets(dice)
        : this.scoreIndividually(dice);
    }
    else{
      return this.scoreIndividually(dice);
    }
  }

  checkForStraight(dice: Array<number>): number {   
    var hasOne = _.indexOf(dice, 1) > -1;
    var hasTwo = _.indexOf(dice, 2) > -1;
    var hasThree = _.indexOf(dice, 3) > -1;
    var hasFour = _.indexOf(dice, 4) > -1;
    var hasFive = _.indexOf(dice, 5) > -1;
    var hasSix = _.indexOf(dice, 6) > -1;

    if (hasTwo && hasThree && hasFour && hasFive){
      if (hasOne){
        return 500;
      }
      if(hasSix){
        return 1000;
      }
    }
    return 0;
  }

  checkForSets(dice: Array<number>): number {
    var result = 0;

    var groupedDice = this.groupDice(dice);
    var setScore = this.scoreSet(groupedDice.setValue);
    var remainderScore = this.scoreIndividually(groupedDice.remainder);

    var result = setScore + remainderScore;
    return result;
  }

  groupDice(dice: Array<number>): GroupedDice {
     var numberOfDice = dice.length;
     var groups = _.groupBy(dice, function(num){return num;});
     var setValue = 0;
     var remainder = [];

    // iterate over each group of the same number...
     _.each(groups, function(group){
       if (group.length >= 3){
         // if there are more than three in that set...
         var num = group[0];
         setValue = num;
         var remainderLength = group.length - 3;
 
         switch (remainderLength){
           case 2:
             remainder = [num, num];
             break;
           case 1:
             remainder = [num];
             break;
           case 0: 
             break;
         }
       }
       else{
         _.each(group, function(num){
           remainder.push(num);
         });
       }
     });
    var result = new GroupedDice(setValue, remainder);
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