import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthService,
  ) {
    this.createForm();
   }

  ngOnInit(): void {
  }

  createForm(){
    this.registerForm = this.fb.group({
      email:['',Validators.required]
    });
  }

  tryRegister(value){
    this.auth.doRegister(value)
  }
}
