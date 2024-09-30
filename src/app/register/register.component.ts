import { Component } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
   

  registerForm=new FormGroup({
    firstname:new FormControl("",{validators:[Validators.required,Validators.pattern(/^[a-zA-Z\s]+$/)]}),
    lastname:new FormControl("",{validators:[Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]}),
    email:new FormControl("",{validators:[Validators.required,Validators.pattern(/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/)]}),
    gender:new FormControl('Female',{validators:[Validators.required]}),
    phoneno:new FormControl("",{validators:[Validators.required,Validators.pattern(/^\d{10}$/)]}),
    password:new FormControl("",{validators:[Validators.required,Validators.pattern(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/)]}),
    confirmpassword:new FormControl("",{validators:[Validators.required,Validators.pattern(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/)]}),
  });



  onsubmit(f:any){
    let form = this.registerForm
    console.log(form)
    if(this.fc['password'].value == this.fc['confirmpassword'].value){
      alert('registered successfully')
      console.log(this.fc)
      console.log(this.fc['password'].value)
       
    }
    else{
      alert('password missmatch')
       
    }
     
     
  }
  

  get fc() {
    return this.registerForm.controls  //not use  this one
  }
  reset(){
    this.registerForm
  }

}
