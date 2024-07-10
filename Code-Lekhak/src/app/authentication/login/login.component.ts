import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  _AuthService = inject(AuthService);
  _router = inject(Router);
  _toastr = inject(ToastrService);

  constructor(

  ) { }



  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.minLength(4)])
  })


  LoginSumbit() {
    console.log(this.loginForm.value);
    this._AuthService.loginUser(this.loginForm.value).subscribe({
      next: (response) => {
        this._router.navigate(["/dashboard"]);
        this._toastr.success(`User Login Sucessful!`);
        this._AuthService.isLoggedIn.update(() => true);
      }, error: (err) => {
        this._toastr.error('Email or password is not valid!');
      },
    })
  }

}

