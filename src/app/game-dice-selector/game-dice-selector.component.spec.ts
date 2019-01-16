import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDiceSelectorComponent } from './game-dice-selector.component';

describe('GameDiceSelectorComponent', () => {
  let component: GameDiceSelectorComponent;
  let fixture: ComponentFixture<GameDiceSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameDiceSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDiceSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
