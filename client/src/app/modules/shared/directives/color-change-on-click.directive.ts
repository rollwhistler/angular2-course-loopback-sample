import { Directive, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appColorChangeOnClick]'
})
export class ColorChangeOnClickDirective {
  @Output() onChangeName: EventEmitter<string> = new EventEmitter<string>();

  constructor(private el: ElementRef) {}

  @HostListener("click",['$event'])
  onClick(event){
    this.onChangeName.emit(this.makeid());
  }

  makeid(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
}
