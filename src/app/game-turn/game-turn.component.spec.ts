import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTurnComponent } from './game-turn.component';

describe('GameTurnComponent', () => {
  let component: GameTurnComponent;
  let fixture: ComponentFixture<GameTurnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameTurnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameTurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
