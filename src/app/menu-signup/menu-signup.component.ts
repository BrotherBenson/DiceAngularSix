import { Component, OnInit } from '@angular/core';
import { SignupRequest } from '../services/models/signupRequest';
import { SignupResponse } from '../services/models/signupResponse';

@Component({
  selector: 'app-menu-signup',
  templateUrl: './menu-signup.component.html',
  styleUrls: ['./menu-signup.component.css']
})
export class MenuSignupComponent implements OnInit {
  signupRequest: SignupRequest;

  inputName: string;
  inputPassword: string;
  inputConfirmPassword: string;
  userSuccessfullyCreated : boolean;
  submitted = false;
  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit() {
    this.userSuccessfullyCreated = false;
  }

  clickSubmit(): void{
    this.signupRequest = new SignupRequest(this.inputName, this.inputPassword, this.inputConfirmPassword);
    
  }
}

export class SignUpViewModel{
    inputUserName: string;
    inputPassword: string;
    inputPasswordConfirmation: string;

    constructor(){
      
    }
  }