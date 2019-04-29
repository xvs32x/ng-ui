import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonModule, GridModule } from '@tech';
import { CardModule } from '../../../../../libs/tech/tech/src/lib/modules/card/card.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ButtonModule, GridModule, CardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
