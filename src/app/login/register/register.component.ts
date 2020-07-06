import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
// import {AuthService} from '../../services/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  passwordNotMatch: boolean = true;

  error_messages = {
    'email':[
      {type: 'required', message: 'Email is Required.'},
      { type: 'minlength', message: 'Email length.' },
      { type: 'maxlength', message: 'Email length.' },
      { type: 'required', message: 'please enter a valid email address.' }
    ],
    'password': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length.' },
      
    ],
    'confirmpassword': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length.' },
      
    ],
  }

  constructor(
    private fb: FormBuilder,
    // private auth: AuthService,
  ) {
    this.createForm();
   }

  ngOnInit(): void {
  }

  createForm(){
    this.registerForm = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email,

      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(10/*this.auth.getMinPassLength()*/),
      ])),
      confirmpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(10/*this.auth.getMinPassLength()*/),
      ])),
    }, {
      validators: this.passwordVal.bind(this)
    });
  }

  passwordVal(formGroup: FormGroup){
    const {value: firstpassword} = formGroup.get('password');
    const {value: secondpassword} = formGroup.get('confirmpassword');
    if (firstpassword === secondpassword){
      this.passwordNotMatch = false;
    }
    else {
      this.passwordNotMatch = true;
    }
  }

  // tryRegister(value){
  //   this.auth.doRegister(value)
  //   .then(res => {
  //     // this.errorMessage="";
  //     // this.successMessage = "Your Account has been created";
  //   }, err => {
  //     // this.errorMessage = "Something went wrong, please try again";
  //     // this.successMessage = "";
  //   })
  // }
}
