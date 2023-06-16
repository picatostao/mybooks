import { NgForm } from '@angular/forms'; 
import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { Respuesta } from 'src/app/models/respuesta';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

public logino:User
constructor(private userservice:UserService, private router:Router){
this.logino=new User(0,"","","","","")
}
onSubmit(form:NgForm){
  this.userservice.login(form.value).subscribe(
    (respuesta : Respuesta)=>{  
      if(respuesta.data_user){
        this.userservice.logueado=true
        this.userservice.user=respuesta.data_user[0]
        this.router.navigate(['books'])
      }else{
        console.log("los datos no coinciden");        
      }
    },
    
  )
}}
