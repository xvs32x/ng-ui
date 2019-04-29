import { Component, OnInit, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'ui-button',
  template: `
    <ng-content></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
  @Input() state: 'default' | 'primary' = 'default';
  @Input() disabled: boolean;

  @HostBinding('class')
  get cssClass() {
    return [
      'ui-' + this.state,
      this.disabled ? 'ui-disabled' : ''
    ].filter(x => !!x).join(' ');
  }

  constructor() {
  }

  ngOnInit() {
  }

}
