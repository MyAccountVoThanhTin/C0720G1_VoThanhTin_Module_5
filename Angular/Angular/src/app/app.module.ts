import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeFontSizeComponent } from './03.Angular_Overview/practices/change-font-size/change-font-size.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeFontSizeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
