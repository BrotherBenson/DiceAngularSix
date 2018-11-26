import { Component, OnInit } from '@angular/core';
import { Die } from '../shared/models/die';

@Component({
  selector: 'app-game-dice-selector',
  templateUrl: './game-dice-selector.component.html',
  styleUrls: ['./game-dice-selector.component.css']
})
export class GameDiceSelectorComponent implements OnInit {
  currentArray: Array<Die>;
  targetArray: Array<Die>;

  constructor() { }

  ngOnInit() {
  }

  onButtonClick(): void{
    // remove selected dice from current array
    // add selected dice to target array
  }

  
}
