import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CodeVerifyComponent } from './code-verify/code-verify.component';
import { MaterialListModule } from '../shared/material-list/material-list.module';
import { HomepageModule } from '../homepage/homepage.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    CodeVerifyComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MaterialListModule,
    HomepageModule
  ]
})
export class AuthenticationModule { }
