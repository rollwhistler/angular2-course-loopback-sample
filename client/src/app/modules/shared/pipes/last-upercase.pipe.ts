import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastUpercase'
})
export class LastUpercasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let arr = value.split("");
    arr[arr.length - 1] = arr[arr.length -1].toUpperCase();
    return arr.join("");
  }

}
