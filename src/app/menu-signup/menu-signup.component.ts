import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-signup',
  templateUrl: './menu-signup.component.html',
  styleUrls: ['./menu-signup.component.css']
})
export class MenuSignupComponent implements OnInit {

  userSuccessfullyCreated : boolean;
  submitted = false;
  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit() {
    this.userSuccessfullyCreated = false;
  }

}

export class SignUpViewModel{
    inputUserName: string;
    inputPassword: string;
    inputPasswordConfirmation: string;

    constructor(){
      
    }
  }