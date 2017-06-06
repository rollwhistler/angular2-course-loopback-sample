import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// third party
import {MdSidenavModule, MdGridListModule, MdButtonModule} from '@angular/material';

// my modules
import { UserModule } from './modules/user/user.module';
import { ObjectModule } from './modules/object/object.module';
import { SharedModule } from './modules/shared/shared.module';
import { RoutingModule } from './modules/routing/routing.module';
// my components
import { AppComponent } from './app.component';

// my services
import { LoginGuardService } from './modules/user/services/auth/login-guard.service';
import { SDKBrowserModule } from './modules/shared/sdk/index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SDKBrowserModule.forRoot(),
    HttpModule,
    UserModule,
    ObjectModule,
    SharedModule,
    MdSidenavModule, MdGridListModule, MdButtonModule,
    RoutingModule
  ],
  providers: [LoginGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
