import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import {ThingyService} from './services/thingy.service';
import { RoutingModule } from './routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RoutingModule
  ],
  providers: [ThingyService],
  declarations: [],
  exports: []
})
export class ObjectModule { }
