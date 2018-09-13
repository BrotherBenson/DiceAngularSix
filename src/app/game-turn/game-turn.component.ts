import { Component, Input, OnInit } from '@angular/core';
import { Die, DieState } from '../shared/models/die';
import { Player } from '../shared/models/player';
import { Roll } from '../shared/models/roll';
import { ScoreSet } from '../shared/models/score-set';
import { Turn } from './turn';
import { GameService } from '../services/game.service';
import { RollingService } from '../services/rolling.service';
import { ScoringService } from '../services/scoring.service';
import { TurnService } from '../services/turn.service';

@Component({
  selector: 'app-game-turn',
  templateUrl: './game-turn.component.html',
  styleUrls: ['./game-turn.component.css']
})

export class GameTurnComponent implements OnInit {
  @Input() player: Player;
  turn: Turn;

  constructor(
    private rollingService: RollingService, 
    private scoringService: ScoringService,
    private turnService: TurnService) { }

  ngOnInit() {
    this.turn = new Turn(this.player);
  }

  clickDice(die: Die): void {
    if (die != null){
      die.toggleDieState();
    }
  }

  clickEndTurn(): void {
    this.turnService.endTurn(this.turn, this.turn.game);
  }

  clickRoll(): void {
    if (this.turn != null && this.turn.dice != null){
      this.processSelectedDice();
      this.roll();
    }
    else { 
      throw 'clickRoll() -- invalid turn';
    }
  }

  processSelectedDice(): void {
    this.scoreSelectedDice();
    this.transferSelectedDiceToSet();
  }

  roll(): void {
      var numberOfDiceToRoll =  5;

      if (this.turn.openDice().length){
        numberOfDiceToRoll = this.turn.openDice().length;
      }

      if(this.turn.openDice().length > 0 ){
        var result = this.rollingService.rollMany(numberOfDiceToRoll);
      }

      this.turn.dice = result;
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