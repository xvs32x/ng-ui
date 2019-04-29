import { Component, OnInit, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'ui-card',
  template: `
    <ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  @Input() state: 'default' | 'primary' = 'default';

  @HostBinding('class')
  get cssClass() {
    return [
      'ui-' + this.state,
    ].filter(x => !!x).join(' ');
  }

  constructor() {
  }

  ngOnInit() {
  }

}
