import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../shared/models/user';
import { Game } from '../shared/models/game';

@Component({
  selector: 'app-user-games',
  templateUrl: './user-games.component.html',
  styleUrls: ['./user-games.component.css']
})
export class UserGamesComponent implements OnInit {
  @Input() user: User;
  games: Array<Game>;

  constructor(private userService: UserService) { 

  }

  ngOnInit() {
    this.games = this.userService.getGames(this.user);
  }
}
