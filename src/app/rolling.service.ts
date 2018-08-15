import { Injectable } from '@angular/core';
import { Die, DieState } from './shared/models/die';
import { Turn } from './turn/turn';

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

  	results.sort(function(a, b){return a-b});

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
