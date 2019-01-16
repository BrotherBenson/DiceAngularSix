import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GameDiceFaceComponent } from './game-dice-face.component';

describe('GameDiceFaceComponent', () => {
  let component: GameDiceFaceComponent;
  let fixture: ComponentFixture<GameDiceFaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameDiceFaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDiceFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
