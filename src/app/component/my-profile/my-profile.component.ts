import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { Respuesta } from 'src/app/models/respuesta';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent{
   public user:User;
  name:string=''
  last_name:string=''
  email:string=''
  photo:string=''
  password:string=""
 
  constructor(private userService:UserService, public toastrService:ToastrService){
    this.user=this.userService.user
  } 
  public cambiardatos(newName:HTMLInputElement, newLast_name:HTMLInputElement, newEmail:HTMLInputElement, newPhoto:HTMLInputElement, newPassword:HTMLInputElement ){
   
   this.user ={
    id_user: this.userService.user.id_user,
    name:newName.value, 
    last_name:newLast_name.value,
    email:newEmail.value,
    photo:newPhoto.value,
    password:newPassword.value,
   }
   
    this.userService.update(this.user).subscribe(
      (respuesta:Respuesta)=>{
        console.log("perfil actualizado",respuesta)
        this.toastrService.show("usuario actualizado correctamente","MyBooks",{toastClass:"toast1"})
      },
      (error)=>{
        console.log("error al actualizar",error);
        this.toastrService.show("usuario o contraseña incorrectos","MyBooks",{toastClass:"toastError"}
        ) 
      }) 
  } 
}







// cambioName:HTMLInputElement,cambioLastName:HTMLInputElement,cambioEmail:HTMLInputElement,cambioFoto:HTMLInputElement



 // this.userID.name=cambioName.value;
    // this.userID.last_name=cambioLastName.value;
    // this.userID.email=cambioEmail.value;
    // this.userID.photo=cambioFoto.value;