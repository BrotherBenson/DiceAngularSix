import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuGameComponent } from './menu-game/menu-game.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { TableComponent } from './table/table.component';
import { TurnComponent } from './turn/turn.component';
import { MenuDebugComponent } from './menu-debug/menu-debug.component';
import { DebugComponent } from './debug/debug.component';
import { MultiplayerComponent } from './multiplayer/multiplayer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuGameComponent,
    ScoreboardComponent,
    TableComponent,
    TurnComponent,
    MenuDebugComponent,
    DebugComponent,
    MultiplayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
