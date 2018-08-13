import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RollingService {

  constructor() { }

  rollMany(numberOfDice: number){
  	var results = [];
  	for (var i = 0; i < numberOfDice; i++){
  		results.push(this.rollSingular());
  	}

  	results.sort(function(a, b){return a-b});

  	return results;
  }

  // roll a singular dice
  rollSingular(): number{
  	return Math.floor(Math.random() * 6) + 1
  }
}
