import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  passwordNotMatch: boolean = true;
  serverMessage: string = '';
  accountSuccess: boolean = false;
  accountError: boolean = false;

  error_messages = {
    'email':[
      { type: 'required', message: 'Email is Required.'},
      { type: 'valid', message: 'A valid email is required.'},
      { type: 'minlength', message: 'Email length.' },
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
    private auth: AuthService,
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
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(this.auth.MIN_PASSWORD_LENGTH),
      ])),
      confirmpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(this.auth.MIN_PASSWORD_LENGTH),
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

  tryRegister(value){
    this.accountError = false;
    this.accountSuccess = false;
    this.serverMessage = "";
    this.auth.doRegistration(value)
    .then(res => {
      this.accountSuccess = true;
      this.serverMessage = "Your account was successfully made, please go and log in.";
    }, err => {
      this.accountError = true;
      this.serverMessage = "There was an error signing up, please try again.";
    })
  }
}
