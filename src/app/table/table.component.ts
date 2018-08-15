import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../game/game';
import { ScoringService } from '../services/scoring.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
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
