import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { ForgotPageComponent } from './forgot-page/forgot-page.component';
import { MainComponent } from './main/main.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const preroutes: Routes = [
  {path: 'login', redirectTo: 'login/main'},
  {path: 'login/main', component: MainComponent},
  {path: 'login/forgot', component: ForgotPageComponent},
  {path: 'login/register', component: RegisterPageComponent},
];

@NgModule({
  declarations: [
    ForgotPageComponent,
    MainComponent,
    RegisterPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(preroutes),
  ],
  exports: [RouterModule],
})
export class LoginModModule { }
