import { Component, OnInit } from '@angular/core';
import { User } from '../../../user/models/user';
import { Thingy } from '../../../object/models/thingy';
import { UserService } from '../../../user/services/user.service';
import { ThingyService } from '../../../object/services/thingy.service';
import { Thing } from '../../../shared/sdk/models/index';
import { LoopBackConfig } from '../../../shared/sdk/index';
import { UserApi } from '../../../shared/sdk/services/index';
import { Router } from '@angular/router';

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

  constructor(private userService: UserService, private thingyService: ThingyService, private userApi: UserApi, private router: Router) {
    LoopBackConfig.setBaseURL("http://localhost:3000");
    LoopBackConfig.setApiVersion("api");
  }

  ngOnInit() {
    this.allUsers = this.userService.getUsers();
    this.thingyService.getThingys().subscribe((thingies: Thing[]) => {
      this.things = thingies;
    });
    this.searchTxtUser = '';
    this.searchTxtThing = '';
    this.filterUsers();
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
    this.thingyService.getThingys(search).subscribe((things: Thing[]) => {
      this.things = things;
    });
  }

  logout() {
    this.userApi.logout();
    this.router.navigate(['/login']);
  }

}

