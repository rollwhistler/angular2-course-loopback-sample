import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// third party
import {MdSidenavModule, MdGridListModule, MdButtonModule} from '@angular/material';

// my modules
import { UserModule } from './modules/user/user.module';
import { ObjectModule } from './modules/object/object.module';
import { SharedModule } from './modules/shared/shared.module';

// my components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    UserModule,
    ObjectModule,
    SharedModule,
    ReactiveFormsModule,
    MdSidenavModule, MdGridListModule, MdButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
