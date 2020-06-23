import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';



@NgModule({
  declarations: [MainComponent, RegisterComponent, ForgotComponent],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
