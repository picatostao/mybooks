import { Component,OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms'   

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent 
{
public myForm:FormGroup;
constructor(private formBuilder:FormBuilder)
{ 
  this.buildForm()
}
public register()
{
  const user=this.myForm.value
  console.log(user);
  
}
private buildForm()
  {
    const minPassLength = 8;

    this.myForm = this.formBuilder.group({
      nombre: [, Validators.required],
      email: [, [ Validators.required, Validators.email]],
      password:[, [Validators.required, Validators.minLength(minPassLength)]],
      password2:[,[Validators.required, this.checkPasswords]]
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
