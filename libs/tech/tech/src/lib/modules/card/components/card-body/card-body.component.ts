import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ui-card-body',
  template: `<ng-content></ng-content>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardBodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
