import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { User } from  'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  private currentUser: Observable<User>;
  private MIN_PASSWORD_LENGTH: number = 10;
  private isUserLoggedIn: boolean = false;

  constructor(
    public  router:  Router,
    public afAuth: AngularFireAuth,
    ) 
  { 
    
  }

  getMinLenPass(): number{
    return this.MIN_PASSWORD_LENGTH;
  }
  // This function tries to register a user
  // Returns 0: Application registration successful
  // Returns 1: General error, contact support 
  // Returns 2: Email address already taken
  // 
  // Returns anything but 0 is unsuccessful
  doRegistration(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }

  // doLogin(value){
  //   return new Promise<any>((resolve, reject) =>{
  //     firebase.auth.
  //     .then(res => {
  //       resolve(res);
  //     }, err => reject(err))
  //     }
  //   })
  // }
}
