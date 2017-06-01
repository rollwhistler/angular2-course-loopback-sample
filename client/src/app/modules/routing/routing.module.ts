import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';
import { LoginComponent } from '../user/login/login.component';
import { LoginGuardService } from '../user/services/auth/login-guard.service';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: '', loadChildren:'../object/object.module#ObjectModule'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
