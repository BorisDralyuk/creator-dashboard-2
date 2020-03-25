import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthLayoutModule } from 'src/app/layouts/auth-layout';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LoginComponent, ForgotComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AuthLayoutModule
  ]
})
export class AuthModule { }
