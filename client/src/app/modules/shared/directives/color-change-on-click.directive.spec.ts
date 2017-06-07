import { ColorChangeOnClickDirective } from './color-change-on-click.directive';
import { ElementRef } from '@angular/core';

describe('ColorChangeOnClickDirective', () => {
  it('should create an instance', () => {
    const directive = new ColorChangeOnClickDirective(new ElementRef({}));
    expect(directive).toBeTruthy();
  });
});
