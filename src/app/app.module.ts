import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ForgotPageComponent } from './forgot-page/forgot-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LikesComponent } from './likes/likes.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { NewListingPageComponent } from './new-listing-page/new-listing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ForgotPageComponent,
    MainPageComponent,
    LikesComponent,
    ProfilePageComponent,
    ProductCardComponent,
    NewListingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
