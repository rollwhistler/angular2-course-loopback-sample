import { Component, OnInit } from '@angular/core';
import { User } from '../../modules/user/models/user';
import { Thingy } from '../../modules/object/models/thingy';
import { UserService } from '../../modules/user/services/user.service';
import { ThingyService } from '../../modules/object/services/thingy.service';
import { Thing } from '../../modules/shared/sdk/models/index';
import { LoopBackConfig } from '../../modules/shared/sdk/index';
import { UserApi } from '../../modules/shared/sdk/services/index';
import { Router } from '@angular/router';
import { INCREMENT, DECREMENT, RESET } from '../../modules/shared/reducers/counter';
import { AppState } from '../../modules/shared/reducers/appState';
import {Observable} from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { SEARCH_SET } from '../../modules/shared/reducers/search';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: User[];
  things: Thingy[];
  allUsers: User[];
  allThings: Thingy[];
  searchTxtUser: string;
  searchTxtThing: string;
  counter: Observable<number>;
  searchTxtStore: Observable<string>;

  constructor(private store: Store<AppState>, private userService: UserService, private thingyService: ThingyService, private userApi: UserApi, private router: Router) {
    LoopBackConfig.setBaseURL("http://localhost:3000");
    LoopBackConfig.setApiVersion("api");
    this.counter = store.select('counter');
    this.searchTxtStore = store.select('searchTxt');
    this.searchTxtThing = '';
    this.searchTxtStore.subscribe((txt)=>{
      this.searchTxtThing = txt;
    });
  }

  ngOnInit() {
    this.allUsers = this.userService.getUsers();
    this.thingyService.getThingys().subscribe((thingies: Thing[]) => {
      this.things = thingies;
    });
    if(!this.searchTxtThing) this.searchTxtThing = ""; 
    this.filterUsers();
  }

  increment(){
		this.store.dispatch({ type: INCREMENT });
	}

	decrement(){
		this.store.dispatch({ type: DECREMENT });
	}


  filterUsers() {
    this.users = this.allUsers.filter((user)=> {
      let result = user.active;
      if (this.searchTxtUser) {
        result = result && (user.name.indexOf(this.searchTxtUser) !== -1);
      }
      return result;
    });
  }

  changeName(res: any) {
    this.thingyService.updateName(res.newName, res.item);
  }

  userTxtSearch(search: string) {
    this.searchTxtUser = search;
    this.filterUsers();
  }

  objTxtSearch(search: string) {
    this.store.dispatch({ type: SEARCH_SET, payload:search });
    this.thingyService.getThingys(search).subscribe((things: Thing[]) => {
      this.things = things;
    });
  }

  logout() {
    this.userApi.logout();
    this.router.navigate(['/login']);
  }

}

