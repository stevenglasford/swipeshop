import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { User } from  'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  MIN_PASSWORD_LENGTH: number = 10;

  constructor(
    public  router:  Router,
    public afAuth: AngularFireAuth,
    ) 
  { 
    
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
}
