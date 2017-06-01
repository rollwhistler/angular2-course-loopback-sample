import { Component, OnInit } from '@angular/core';
import { LoopBackConfig } from './modules/shared/sdk/index';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { testValidator } from './modules/shared/validators/validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  username: FormControl = new FormControl('',[
    Validators.required
  ]);
  password: FormControl = new FormControl('',[
    Validators.required,
    testValidator
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

