import { Component, OnInit } from '@angular/core';
import { Player, Roll, Turn } from '../models';
import { RollingService } from '../rolling.service';

@Component({
  selector: 'app-turn',
  templateUrl: './turn.component.html',
  styleUrls: ['./turn.component.css']
})

export class TurnComponent implements OnInit {

  constructor(private rollingService: RollingService) { }

  ngOnInit() {
  }

  clickEndTurn(): void {
  	console.log('ended');
  }

  clickRoll(): void {
  	console.log('clicked');
  }
}