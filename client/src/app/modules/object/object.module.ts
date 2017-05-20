import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import {ThingyService} from './services/thingy.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [ThingyService],
  declarations: [],
  exports: []
})
export class ObjectModule { }
