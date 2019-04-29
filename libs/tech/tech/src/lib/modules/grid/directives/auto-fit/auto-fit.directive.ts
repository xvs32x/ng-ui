import { Directive, HostBinding, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Directive({
  selector: '[uiAutoFit]'
})
export class AutoFitDirective {

  @Input() method: 'auto-fill' | 'auto-fit' = 'auto-fit';
  @Input() func = 'minmax(200px, 1fr)';

  @HostBinding('style.grid-template-columns')
  get style(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle('repeat('+ this.method +', '+ this.func +')');
  }

  constructor(private sanitizer: DomSanitizer) {
  }

}
