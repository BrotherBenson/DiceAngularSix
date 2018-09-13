import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginRequest } from '../services/models/loginRequest';
import { ForgotPasswordRequest } from '../services/models/forgotPasswordRequest';
import { User } from '../shared/models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-menu-login',
  templateUrl: './menu-login.component.html',
  styleUrls: ['./menu-login.component.css']
})

export class MenuLoginComponent implements OnInit {
  forgotPasswordRequest: ForgotPasswordRequest;
  loginRequest: LoginRequest;
  inputName: string;
  inputPassword: string;
  user: User;
  userSuccessfullyCreated: boolean;

  constructor(private userService: UserService ) { }

  ngOnInit() {
  }

  clickLogin(): void {
    this.loginRequest = new LoginRequest(this.inputName, this.inputPassword);

    console.log(this.loginRequest);
    
    var response = this.userService.login(this.loginRequest);

    console.log('clicked');

    if (response.isValid == true){
      console.log('correct')
    }
    else{
      console.log('incorrect password');
    }
  }

  clickForgot(): void {
    this.forgotPasswordRequest = new ForgotPasswordRequest(this.inputName);

    var response = this.userService.forgotPassword(this.forgotPasswordRequest);
  }
}