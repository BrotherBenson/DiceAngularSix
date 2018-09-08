import { Injectable } from '@angular/core';
import { Die, DieState } from '../shared/models/die';
import { Turn } from '../turn/turn';
import { _ } from 'underscore';

@Injectable({
  providedIn: 'root'
})

export class RollingService {

  constructor() { }

  rollMany(numberOfDice: number): Array<Die> {
  	var results = [];
  	for (var i = 0; i < numberOfDice; i++){
  		results.push(this.rollSingular());
  	}

    _.sortBy(results, function (num){num});

    return results;
  }

  rollSingular(): Die {
    var face = this.createRandomFaceValue()
    return new Die(face);
  }

  // roll a singular dice
  createRandomFaceValue(): number {
  	return Math.floor(Math.random() * 6) + 1
  }
}
