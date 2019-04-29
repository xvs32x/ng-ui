import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './components/grid/grid.component';
import { AutoFitDirective } from './directives/auto-fit/auto-fit.directive';
import { AutoGapDirective } from './directives/auto-gap/auto-gap.directive';

@NgModule({
  declarations: [GridComponent, AutoFitDirective, AutoGapDirective],
  exports: [
    GridComponent,
    AutoFitDirective,
    AutoGapDirective
  ],
  imports: [
    CommonModule
  ]
})
export class GridModule { }
