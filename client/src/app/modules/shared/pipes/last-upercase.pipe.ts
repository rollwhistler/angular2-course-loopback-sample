import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastUpercase'
})
export class LastUpercasePipe implements PipeTransform {

  transform(value: any, position?: number): any {
    let arr = value.split("");
    if (!position || isNaN(position) || (position < 0) ) position = arr.length -1;
    else if (position > (arr.length - 1)) position = arr.length -1;

    arr[position] = arr[position].toUpperCase();
    return arr.join("");
  }

}
