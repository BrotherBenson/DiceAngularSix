import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginRequest } from '../services/models/loginRequest';
import { User } from '../shared/models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-menu-login',
  templateUrl: './menu-login.component.html',
  styleUrls: ['./menu-login.component.css']
})
export class MenuLoginComponent implements OnInit {
  userSuccessfullyCreated: boolean;
  loginRequest: LoginRequest;
  inputName: string;
  inputPassword: string;
  user: User;

  constructor(private userService: UserService ) { }

  ngOnInit() {
  }

  onClickLogin(): void {
    var inputLoginModel = {
      inputName: this.inputName,
      inputPassword: this.inputPassword
    };
    
    var response = this.userService.login(this.loginRequest);

    if (response.isValid == true){
      
    }
  }
}