import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorChangeOnClick]'
})
export class ColorChangeOnClickDirective {

  constructor(private el: ElementRef) {}

  @HostListener("click",['$event'])
  onClick(event){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = "rgb("+r+","+g+","+b+")"
    this.el.nativeElement.style.backgroundColor = color;
  }
}
