import { Component, OnInit } from '@angular/core';
import { LoopBackConfig } from './modules/shared/sdk/index';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  submit(form: NgForm) {
    console.log(form);
  }  

}

