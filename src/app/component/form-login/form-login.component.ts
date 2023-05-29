import { NgForm } from '@angular/forms'; 
import { Component, OnInit } from '@angular/core';
import { Logino } from 'src/app/models/logino';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

public logino:Logino
constructor(){
this.logino=new Logino("","")
}
onSubmit(form:NgForm){
  console.log(this.logino)
 
}
ngOnInit():void{

}
}
