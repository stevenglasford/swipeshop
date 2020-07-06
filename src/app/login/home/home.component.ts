import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;
  
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
  }

  constructor(
    public router: Router,
    private fb: FormBuilder,
    private auth: AuthService,
  ) { 
    this.createForm();
  }

  createForm(){
    this.loginForm = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(this.auth.MIN_PASSWORD_LENGTH),
      ]))
    })
  }

  ngOnInit(): void {
  }

}
