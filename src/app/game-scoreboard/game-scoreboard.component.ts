import { Component, Input, OnInit } from '@angular/core';
import { Score } from '../shared/models/score';

@Component({
	selector: 'app-game-scoreboard',
	templateUrl: './game-scoreboard.component.html',
	styleUrls: ['./game-scoreboard.component.css']
})

export class GameScoreboardComponent implements OnInit {
	@Input() scores: Array<Score>;

	constructor() { }

	ngOnInit() {
	}
}

