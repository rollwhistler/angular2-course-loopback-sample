import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { UserService } from './services/user.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
  ],
  providers: [UserService],
  exports: []
})
export class UserModule { }
