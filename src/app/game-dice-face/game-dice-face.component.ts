import { Component, OnInit, Input } from '@angular/core';
import { Die } from '../shared/models/die';

@Component({
  selector: 'game-dice-face',
  templateUrl: './game-dice-face.component.html',
  styleUrls: ['./game-dice-face.component.css']
})
export class GameDiceFaceComponent implements OnInit {
  _face: number;

  @Input()
  set face(face: number) { 
    this._face = (face);
  }

  get face(): number {
    return this._face; 
  } 

  constructor() { }

  ngOnInit() {
  }
}
