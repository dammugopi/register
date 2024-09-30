import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(private route:Router ){}
  
  loginform = new FormGroup({
    email:new FormControl("",{validators:[Validators.required,Validators.pattern(/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{3,}/)]}),
    password:new FormControl("",{validators:[Validators.required,Validators.pattern(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/)]}),

  });
  submit(f:any ){
    if(this.loginform.valid && this.loginform.value.email=="a@gmail.com" && this.loginform.value.password=='Dammu@123' ){ 
      console.log(this.loginform.value);
      this.route.navigateByUrl('out') ;
      // this.showSuccess();
      
  
  
    }
    else{
      // this.showWaring();
    }
    
   }
   get fc() {
    return this.loginform.controls;  //not use  this one
  }







}
