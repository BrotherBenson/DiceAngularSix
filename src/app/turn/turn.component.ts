import { Component, Input, OnInit } from '@angular/core';
import { Die, DieState } from '../shared/models/die';
import { Player } from '../shared/models/player';
import { Roll } from '../shared/models/roll';
import { ScoreSet } from '../shared/models/score-set';
import { Turn } from './turn';
import { RollingService } from '../services/rolling.service';
import { ScoringService } from '../services/scoring.service';

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

  clickDice(die: Die): void {
    console.log('clicked dice');
    if (die != null){
      die.toggleDieState();
    }
  }

  clickEndTurn(): void {
  	this.turn.isFinished = true;
  }

  clickRoll(): void {
    console.log('clicked roll');
    if (this.turn != null && this.turn.dice != null){
      console.log('processingSelected');
      this.processSelectedDice();

      console.log('rolling');
      this.roll();
    }
    else { 
      console.log('clickRoll() -- invalid turn')
    }
  }

  processSelectedDice(): void {
    console.log('processSelectedDice()');
    this.scoreSelectedDice();
    this.transferSelectedDiceToSet();
  }

  roll(): void {
      console.log('roll()');
      var numberOfDiceToRoll =  5;

      if (this.turn.openDice().length){
        numberOfDiceToRoll = this.turn.openDice().length;
      }

      if(this.turn.openDice().length > 0 ){
        console.log('rolling ', numberOfDiceToRoll);
        var result = this.rollingService.rollMany(numberOfDiceToRoll);
      }

      this.turn.dice = result;
      console.log('roll close')
  }

  scoreSelectedDice(): void {
    if (this.turn.dice && this.turn.selectedDice().length > 0){
      var selectedDice = this.turn.selectedDice();
      var score = this.scoringService.score(selectedDice);
      this.turn.score += score;
    }
  }

  transferSelectedDiceToSet(): void {
    var dice = this.turn.selectedDice();
    for (let die of dice){
      die.state = DieState.Set;
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