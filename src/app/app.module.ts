import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewGameMenuComponent } from './new-game-menu/new-game-menu.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { TableComponent } from './table/table.component';
import { TurnComponent } from './turn/turn.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    NewGameMenuComponent,
    ScoreboardComponent,
    TableComponent,
    TurnComponent,
    GameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
