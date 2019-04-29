import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[uiAutoGap]'
})
export class AutoGapDirective {
  @HostBinding('style.gap') gap = '1rem';
  constructor() { }

}
