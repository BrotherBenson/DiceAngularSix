import { Component, Input, OnInit } from '@angular/core';
import { Die, DieState, Player, Roll, Turn } from '../models';
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
  	this.turn.isFinished = true;
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

  roll(): void {
      var numberOfDiceToRoll = 5;

      if (this.turn.selectedDice().length > 0 ){
        this.convertSelectedDice();
      }      

      var result = this.rollingService.rollMany(numberOfDiceToRoll);
      this.turn.dice = result;
  }

  scoreSelectedDice(): void {
    if (this.turn.dice && this.turn.selectedDice().length > 0){
      var selectedDice = this.turn.selectedDice();
      var score = this.scoringService.score(selectedDice);
      this.turn.score += score;
    }
  }

  convertSelectedDice(): void {
    for(let die of this.turn.dice){
      if (die.state === DieState.Selected){
        die.state = DieState.Set;
      }
    }
  }
}