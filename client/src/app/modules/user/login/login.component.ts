import { Component } from '@angular/core';
import { LoopBackConfig } from '../../shared/sdk/index';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  username: FormControl = new FormControl('',[
    Validators.required
  ]);
  password: FormControl = new FormControl('',[
    Validators.required
  ]);
  loginForm: FormGroup = this.builder.group({
    username: this.username, 
    password: this.password
  });
  
  constructor(private  builder: FormBuilder) {

  }
  
  submit() {
    console.log(this.loginForm);
  }  


}
