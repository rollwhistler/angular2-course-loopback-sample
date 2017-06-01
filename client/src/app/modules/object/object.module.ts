import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import {ThingyService} from './services/thingy.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [ThingyService],
  declarations: [HomeComponent],
  exports: []
})
export class ObjectModule { }
