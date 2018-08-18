import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDebugComponent } from './menu-debug.component';

describe('MenuDebugComponent', () => {
  let component: MenuDebugComponent;
  let fixture: ComponentFixture<MenuDebugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuDebugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDebugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
