import { Component } from '@angular/core';
import { Logino } from 'src/app/models/logino';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public login:Logino
  userLog:User
}
