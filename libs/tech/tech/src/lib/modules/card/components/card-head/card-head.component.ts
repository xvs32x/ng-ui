import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ui-card-head',
  template: `<ng-content></ng-content>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardHeadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
