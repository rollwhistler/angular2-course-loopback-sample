import { Injectable } from '@angular/core';

@Injectable()
export class ThingyService {

  constructor() { }

  getThingys() {
    return [{
      name: 'Car',
      id: 1,
      active: true
    }, {
      name: 'Moto',
      id: 2,
      active: true
    },{
      name: 'Plane',
      id: 3,
      active: true
    },{
      name: 'Train',
      id: 4,
      active: true
    },{
      name: 'Lamp',
      id: 5,
      active: true
    },{
      name: 'Chair',
      id: 6,
      active: true
    },{
      name: 'Ring',
      id: 7,
      active: true
    }]
  }
}
