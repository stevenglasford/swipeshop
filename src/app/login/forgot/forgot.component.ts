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
      ]))
    })
  }

  ngOnInit(): void {
  }

}
