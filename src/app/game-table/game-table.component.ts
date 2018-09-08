import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../shared/models/game';
import { ScoringService } from '../services/scoring.service';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.css']
})

export class GameTableComponent implements OnInit {
  @Input() game: Game;

  showScoreBoard: boolean;
  showTurn: boolean;

  constructor(private scoringService: ScoringService) { }

  ngOnInit() {
    this.showTurn = true;
    this.showScoreBoard = false;
  }

  clickTurn(): void {
    this.showScoreBoard = false;
    this.showTurn = true;
  }

  clickScoreBoard(): void {
    this.showScoreBoard = true;
    this.showTurn = false;
  }
}
