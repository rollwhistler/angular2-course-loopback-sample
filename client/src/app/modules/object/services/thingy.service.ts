import { Injectable } from '@angular/core';
import { ThingApi } from '../../shared/sdk/services/index';

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
}
