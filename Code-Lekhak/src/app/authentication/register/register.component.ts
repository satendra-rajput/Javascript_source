import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(
    private _toastr:ToastrService,
    private _router:Router,
    private _AuthService: AuthService
  ) 
  { }



  registerForm: FormGroup = new FormGroup({
    fullName:new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required ,Validators.email]),
    phone: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required ,Validators.minLength(6),])
  })


  registerLogin() {
    console.log(this.registerForm.value);
    this._AuthService.RegisterUser(this.registerForm.value).subscribe({
      next:(response)=>{
        //console.log(response);
        this._toastr.success(`User Login Sucessful!`);
        this._router.navigate(["/auth/login"])
      }, error:(err)=>{
        this._toastr.error('Email or password is not valid!');
      },
    })
  }
}


