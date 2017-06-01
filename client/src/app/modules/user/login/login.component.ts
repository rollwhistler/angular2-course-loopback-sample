import { Component } from '@angular/core';
import { LoopBackConfig } from '../../shared/sdk/index';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { User, AccessToken }  from '../../shared/sdk/models/index';
import { UserApi }            from '../../shared/sdk/services/index';

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
  
  constructor(private  builder: FormBuilder, private userApi: UserApi) {
    LoopBackConfig.setBaseURL("http://localhost:3000");
    LoopBackConfig.setApiVersion("api");
  }
  
  submit() {
    this.userApi.login({'email':this.username.value, 'password':this.password.value}, true)
    .subscribe((user) => {
      console.log(user);
    }, (err) => alert(err.message));
  }  


}
