import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent{
  name:string=''
  last_name:string=''
  email:string=''
  photo:string=''
  public user:User;
  constructor(private userService:UserService){
    this.user=this.userService.user
  } 
  public cambiardatos():void{
    this.userService.update(this.user).subscribe(
      (respuesta)=>{
        console.log("perfil actualizado",respuesta)
      },
      (error)=>{
        console.log("error al actualizar",error); 
      }) 
  } 
}







// cambioName:HTMLInputElement,cambioLastName:HTMLInputElement,cambioEmail:HTMLInputElement,cambioFoto:HTMLInputElement



 // this.userID.name=cambioName.value;
    // this.userID.last_name=cambioLastName.value;
    // this.userID.email=cambioEmail.value;
    // this.userID.photo=cambioFoto.value;