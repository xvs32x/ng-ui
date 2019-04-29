import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { CardHeadComponent } from './components/card-head/card-head.component';
import { CardBodyComponent } from './components/card-body/card-body.component';
import { CardFooterComponent } from './components/card-footer/card-footer.component';

@NgModule({
  declarations: [CardComponent, CardHeadComponent, CardBodyComponent, CardFooterComponent],
  exports: [
    CardComponent,
    CardHeadComponent,
    CardBodyComponent,
    CardFooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CardModule { }
