import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ui-card-footer',
  template: `<ng-content></ng-content>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
