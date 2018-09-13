import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSignupComponent } from './menu-signup.component';

describe('MenuSignupComponent', () => {
  let component: MenuSignupComponent;
  let fixture: ComponentFixture<MenuSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
