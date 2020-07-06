import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service'


@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  forgotForm: FormGroup;
  ServerMessage: string = '';

  error_messages = {
    'email':[
      { type: 'required', message: 'Email is Required.'},
      { type: 'valid', message: 'A valid email is required.'},
      { type: 'minlength', message: 'Email length.' },
      { type: 'required', message: 'please enter a valid email address.' }
    ]
  }

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
  ) {
    this.createForm()
  }

  createForm(){
    this.forgotForm = this.fb.group({
      email: new FormControl('',Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]))
    })
  }

  ngOnInit(): void {
  }

}
