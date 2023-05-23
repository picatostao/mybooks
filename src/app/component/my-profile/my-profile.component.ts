import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent{
  public userID:User;
  constructor(){
    this.userID=new User(137, "Andrés","Martinez", "andresM@andres.es","https://cdn-icons-png.flaticon.com/512/3577/3577429.png", "1234")
  } 
  public cambiardatos(cambioName:HTMLInputElement,cambioLastName:HTMLInputElement,cambioEmail:HTMLInputElement,cambioFoto:HTMLInputElement){
    
    this.userID.name=cambioName.value
    this.userID.last_name=cambioLastName.value
    this.userID.email=cambioEmail.value
    this.userID.photo=cambioFoto.value
  } 
}


