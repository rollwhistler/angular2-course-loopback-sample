import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MdCheckboxModule} from '@angular/material';
import {MdListModule} from '@angular/material';
import { SDKBrowserModule } from './sdk/index';

// my components
import { InputSearchComponent } from './form/input-search/input-search.component';
import { GenericFilterComponent } from './form/generic-filter/generic-filter.component';
import { GenericListComponent } from './generic-list/generic-list.component';
import { ColorChangeOnClickDirective } from './directives/color-change-on-click.directive';
import { LastUpercasePipe } from './pipes/last-upercase.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MdCheckboxModule,
    MdListModule,
    SDKBrowserModule.forRoot()
  ],
  declarations: [
    InputSearchComponent,
    GenericFilterComponent,
    GenericListComponent,
    ColorChangeOnClickDirective,
    LastUpercasePipe
  ],
  exports: [InputSearchComponent, LastUpercasePipe, ColorChangeOnClickDirective, GenericFilterComponent, GenericListComponent, BrowserAnimationsModule, SDKBrowserModule]
})
export class SharedModule { }
