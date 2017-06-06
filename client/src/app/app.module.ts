import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './modules/shared/reducers/counter';
import { searchTxtReducer } from './modules/shared/reducers/search';
import { routerReducer, RouterStoreModule } from '@ngrx/router-store';

// third party
import {MdSidenavModule, MdGridListModule, MdButtonModule} from '@angular/material';

// my modules
import { UserModule } from './modules/user/user.module';
import { ObjectModule } from './modules/object/object.module';
import { SharedModule } from './modules/shared/shared.module';
import { RoutingModule } from './modules/routing/routing.module';
// my components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
// my services
import { LoginGuardService } from './modules/user/services/auth/login-guard.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
    MdSidenavModule, MdGridListModule, MdButtonModule,
    RoutingModule,
    StoreModule.provideStore({ counter: counterReducer, searchTxt: searchTxtReducer, router: routerReducer }),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    RouterStoreModule.connectRouter()
  ],
  providers: [LoginGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
