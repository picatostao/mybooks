import { Component,OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms'
import { UserService } from 'src/app/shared/user.service';
import { Respuesta } from 'src/app/models/respuesta';
import { User } from 'src/app/models/user';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent 
{
public myForm:FormGroup;
constructor(private formBuilder:FormBuilder, private userService:UserService, public toastrService:ToastrService, private router:Router)
{ 
  this.buildForm()
}
public register():void
{
  if (!this.myForm.valid){
    console.log("formulario invalido");
    return; 
  }
  const password=this.myForm.get('password').value
  const password2=this.myForm.get('password2').value

  if (password!== password2){
    console.log("las contraseñas no coinciden");
    return;
  }
  const user:User={
    id_user: 0,
    name: this.myForm.get('nombre')?.value,
    last_name: this.myForm.get('apellido')?.value,
    email: this.myForm.get('email')?.value,
    photo: this.myForm.get('photo')?.value,
    password: password,
    // userInfo: function (): string {
    //   throw new Error('error de implementación');
    // }
  }
  this.userService.register(user).subscribe({
    next:(response)=>{
      console.log("usuario registrado", response);
      this.toastrService.show("usuario registrado correctamente","MyBooks",{toastClass:"toast1"})
      this.router.navigate(['login'])
      
    },
    error:(error)=>{
      console.log("error al registrar usuario",error);
      
    }
  })
}


private buildForm()
  {
    const minPassLength = 8;

    this.myForm = this.formBuilder.group({
      nombre: [, Validators.required],
      apellido:[, Validators.required],
      email: [, [ Validators.required, Validators.email]],
      password:[, [Validators.required, Validators.minLength(minPassLength)]],
      password2:[,[Validators.required, this.checkPasswords]],
      photo:[, Validators.required]
    }); 
  }
  private checkPasswords(control: AbstractControl)
  {
    let resultado = {matchPassword: true};
    if (control.parent?.value.password == control.value)
      resultado = null;
    return resultado;
  }
}
