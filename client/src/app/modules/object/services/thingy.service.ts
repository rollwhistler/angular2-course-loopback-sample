import { Injectable } from '@angular/core';
import { ThingApi } from '../../shared/sdk/services/index';
import { Thing } from '../../shared/sdk/models/index';

@Injectable()
export class ThingyService {

  constructor(private thingApi: ThingApi) { }

  getThingys(searchTxt?: string) {
    let filter: any = {};

    if (searchTxt) {
       filter.where ={
        "name": {
          "like":"%"+searchTxt+"%"
        }
      }
    }

    return this.thingApi.find(filter);
  }

  updateName(name: string, thingy: Thing) {
    let filter = {
        id: thingy.id
    }
    this.thingApi.updateAll(filter, {name: name}).subscribe((data) => {
      console.log(data);
    });
  }
}
