import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  getUsers() {
    return [{
      name: 'Paco',
      id: 1,
      active: true
    }, {
      name: 'Ramon',
      id: 2,
      active: true
    },{
      name: 'Ulises',
      id: 3,
      active: true
    },{
      name: 'Alfonso',
      id: 4,
      active: true
    },{
      name: 'Juliano',
      id: 5,
      active: true
    },{
      name: 'Rigoberto',
      id: 6,
      active: true
    },{
      name: 'Ildefonso',
      id: 7,
      active: true
    }]
  }
}
