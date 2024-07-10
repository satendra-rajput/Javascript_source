import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { guestGuard } from '../core/guards/guest/guest.guard';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CodeVerifyComponent } from './code-verify/code-verify.component';

const routes: Routes = [
  {path:'login',  component:LoginComponent,canActivate:[guestGuard],  title:"Login - Satendra Rajput"},
  {path:'register', component:RegisterComponent, title:"Register - Satendra Rajput"},
  {path:'forget_password', component:ForgetPasswordComponent, title:"Forget Password - Satendra Rajput"},
  {path:'reset_password', component:ResetPasswordComponent, title:"Reset Password - Satendra Rajput"},
  {path:'verification_code', component:CodeVerifyComponent, title:"Verification Code - Satendra Rajput"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
