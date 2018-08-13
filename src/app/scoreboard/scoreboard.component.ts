import { Component, Input, OnInit } from '@angular/core';
import { Score } from '../models';

@Component({
	selector: 'app-scoreboard',
	templateUrl: './scoreboard.component.html',
	styleUrls: ['./scoreboard.component.css']
})

export class ScoreboardComponent implements OnInit {
	@Input() scores: Array<Score>;

	constructor() { }

	ngOnInit() {
	}
}
