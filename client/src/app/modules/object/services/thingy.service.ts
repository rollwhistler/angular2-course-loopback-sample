import { Injectable } from '@angular/core';
import { ThingApi } from '../../shared/sdk/services/index';

@Injectable()
export class ThingyService {

  constructor(private thingApi: ThingApi) { }

  getThingys() {
    return this.thingApi.find();
  }
}
