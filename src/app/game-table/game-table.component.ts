import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../shared/models/game';
import { User } from '../shared/models/user';
import { GameService } from '../services/game.service';
import { ScoringService } from '../services/scoring.service';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.css']
})

export class GameTableComponent implements OnInit {
  @Input() game: Game;
  @Input() user: User;

  showScoreBoard: boolean;
  showTurn: boolean;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private location: Location,
    private scoringService: ScoringService) { }

  ngOnInit() {
    this.getGame();
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

  getGame(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.game = this.gameService.getGame(id);
  }
}
