import { Component, Input, OnInit } from '@angular/core';
import { Player, Roll, Turn } from '../models';
import { RollingService } from '../rolling.service';
import { ScoringService } from '../scoring.service';

@Component({
  selector: 'app-turn',
  templateUrl: './turn.component.html',
  styleUrls: ['./turn.component.css']
})

export class TurnComponent implements OnInit {
  @Input() player: Player;
  turn: Turn;

  constructor(private rollingService: RollingService, private scoringService: ScoringService) { }

  ngOnInit() {
    this.turn = new Turn(this.player);
  }

  clickEndTurn(): void {
  	console.log('ended');
  }

  clickRoll(): void {
    if (this.turn != null && this.turn.dice != null){
      this.scoreSelectedDice();
      this.roll();
    }
    else { 
      console.log('clickRoll() -- invalid turn')
    }
  }

  determineNumberOfDice(): number {
    var numberOfDice = 5;
    if (this.turn.dice && this.turn.dice.length > 0){
      numberOfDice = numberOfDice - this.turn.openDice().length;
    }
    return numberOfDice;
  }

  roll(): void { 
      var numberOfDice = this.determineNumberOfDice();
      var result = this.rollingService.rollMany(numberOfDice);
      console.log('result roll', result);
  }

  scoreSelectedDice(): void {
    if (this.turn.dice && this.turn.selectedDice().length > 0){
      var score = this.scoringService.score(this.turn.selectedDice());
      this.turn.score += score;
    }
  }
}