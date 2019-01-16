import { Injectable } from '@angular/core';
import { Die, DieState } from '../shared/models/die';
import { DieScore } from '../shared/models/dieScore';
import { Roll } from '../shared/models/roll';
import { Turn } from '../game-turn/turn';
import { _ } from 'underscore';

@Injectable({
  providedIn: 'root'
})

export class RollingService {

  constructor() { }

  rollMany(numberOfDice: number): Roll {
  	var results = [];
  	for (var i = 0; i < numberOfDice; i++){
  		results.push(this.rollSingular());
  	}

    var roll = new Roll();
    roll.numberOfDice = numberOfDice;
    roll.outcome = _.sortBy(results, function (num){num});
    roll.diceScores =  this.calculateDieScores(roll);

    return roll;
  }

  rollSingular(): Die {
    var face = this.createRandomFaceValue()
    return new Die(face);
  }

  calculateDieScores(roll: Roll): Array<DieScore> {
    var uniqueDice = _.uniq(roll.outcome);
    var dieScores = new Array();

    for (let die of uniqueDice){
      var otherDice = _.difference(roll.outcome, die);
      var dieScore = this.calculateIndividualScores(die, otherDice);
      dieScores.push(dieScore);
    }
    return dieScores;
  }

  calculateIndividualScores(die: number, otherDice: Array<number>): DieScore {
    var scores = [];
    var count = _.countBy(otherDice, function(num){return num = die;})
    if (count == 0){
      return null;
    }
    
    if (die == 1){
      switch(count){
        case 1: 
          scores.push(100);
          break;
        case 2: 
          scores.push(200);
          break;
        case 3:
          scores.push(1000);
          break;
        case 4: 
          scores.push(1100);
          break;
        case 5: 
          scores.push(1200);
          break;
      }
    }
    else if (die == 5){
      switch(count){
        case 1: 
          scores.push(50);
          break;
        case 2: 
          scores.push(100);
          break;
        case 3:
          scores.push(500);
          break;
        case 4: 
          scores.push(550);
          break;
        case 5: 
          scores.push(600);
          break;
      }
    }
    else if (count >= 3){
      switch (die){
        case 2:
          scores.push(200);
          break;
        case 3:
          scores.push(300);
        case 4:
          scores.push(400);
        case 6:
          scores.push(600);
      }
    }

    var together = _.flatten([die], otherDice).sortBy(function (num){return num;});
    if (together = [1,2,3,4,5]){
      scores.push(500);
    }
    else if (together = [2,3,4,5,6]){
      scores.push(1000);
    }
  
    // check for straight
    // combine them
    // evaluate directly

    return new DieScore(die, scores);
  }

  // roll a singular dice
  createRandomFaceValue(): number {
  	return Math.floor(Math.random() * 6) + 1
  }
}
