import { Injectable } from '@angular/core';
import { RollingService } from './rolling.service';
import { ScoringService } from './scoring.service';
import { Turn } from '../turn/turn';
import { Game } from '../shared/models/game';

@Injectable({
  providedIn: 'root'
})
export class TurnService {

  constructor(private scoringService: ScoringService, private rollingService: RollingService) { }

  endTurn(turn: Turn, game: Game): void {
		turn.isFinished = true;
		game.turns.push(turn);
  }

  listScoringPermutations(): Array<RollOption>{
    var result = [];
    return result;
  }
}

export class RollOption{
  numberValues: Array<number>;
  pointValue: number;
}
