import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';
import {MdCheckboxModule} from '@angular/material';
import {MdListModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MdCheckboxModule,
    MdListModule,
    MdInputModule,
    MdButtonModule,
    RouterTestingModule
  ],
  declarations: [],
  exports: [ReactiveFormsModule, FormsModule,
    BrowserAnimationsModule,
    MdCheckboxModule,
    MdListModule,
    MdInputModule,
    MdButtonModule,
    RouterTestingModule]
})
export class SharedTestModule { }
