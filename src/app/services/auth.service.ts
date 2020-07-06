import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
// import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';
// import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  MIN_PASSWORD_LENGTH: number = 10;

  constructor(
    // public  afAuth:  AngularFireAuth, 
    public  router:  Router) 
  { 
    //   this.afAuth.authState.subscribe(user => {
    //   if (user){
    //     this.user = user;
    //     localStorage.setItem('user', JSON.stringify(this.user));
    //   } else {
    //     localStorage.setItem('user', null);
    //   }
    // })
    
  }

  //This function will return true if the email address
  //is not being used by anyone, false if it is taken
  verifyEmptyEmail():boolean {
    //placeholder 
    return false;
  }

  // doLogin(value){
  //   return new Promise<any>((resolve,reject) => {
  //     firebase.auth().signInWithEmailAndPassword(value.email, value.password)
  //     .then(res => {
  //       resolve(res);
  //     }, err => reject(err))
  //   })
  // }

  // doGoogleLogin(){
  //   return new Promise<any>((resolve, reject) => {
  //     let provider = new firebase.auth.GoogleAuthProvider();
  //     provider.addScope('profile');
  //     provider.addScope('email');
  //     this.afAuth.signInWithPopup(provider)
  //     .then(res => {
  //       resolve(res);
  //     })
  //   })
  // }

  // doLogout(){
  //   return new Promise((resolve, reject) => {
  //     if (firebase.auth().currentUser){
  //       this.afAuth.signOut();
  //       resolve();
  //     }
  //     else{
  //       reject();
  //     }
  //   })
  // }

  // doRegister(value){
  //   return new Promise<any>((resolve, reject) => {
  //     firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
  //     .then(res => {
  //       resolve(res);
  //     }, err => reject(err))
  //   })
  // }



  // getUserFingerPrint(): string{
    
  //   return '';
  // }
}
