import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MdCheckboxModule} from '@angular/material';
import {MdListModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import { SDKBrowserModule } from './sdk/index';

// my components
import { InputSearchComponent } from './form/input-search/input-search.component';
import { GenericFilterComponent } from './form/generic-filter/generic-filter.component';
import { GenericListComponent } from './generic-list/generic-list.component';
import { ColorChangeOnClickDirective } from './directives/color-change-on-click.directive';
import { LastUpercasePipe } from './pipes/last-upercase.pipe';
import { CounterComponent } from './components/counter/counter.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MdCheckboxModule,
    MdListModule,
    SDKBrowserModule.forRoot(),
    MdInputModule,
    MdButtonModule
  ],
  declarations: [
    InputSearchComponent,
    GenericFilterComponent,
    GenericListComponent,
    ColorChangeOnClickDirective,
    LastUpercasePipe,
    CounterComponent
  ],
  exports: [InputSearchComponent, LastUpercasePipe,  MdInputModule,
    MdButtonModule, ColorChangeOnClickDirective, GenericFilterComponent, 
    GenericListComponent, BrowserAnimationsModule, SDKBrowserModule, CounterComponent]
})
export class SharedModule { }
