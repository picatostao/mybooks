import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
constructor(private userService:UserService){}
get log():boolean{
  return this.userService.logueado
}
}
