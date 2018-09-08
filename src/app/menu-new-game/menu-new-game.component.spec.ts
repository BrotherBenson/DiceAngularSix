import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNewGameComponent } from './menu-new-game.component';

describe('MenuNewGameComponent', () => {
  let component: MenuNewGameComponent;
  let fixture: ComponentFixture<MenuNewGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuNewGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNewGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
