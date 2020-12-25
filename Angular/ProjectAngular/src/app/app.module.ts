import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeComponent } from './03.Angular_Overview/practices/font-size/font-size.component';
import { PetComponent } from './03.Angular_Overview/practices/pet/pet.component';
import { BtHangNgayComponent } from './bt-hang-ngay/bt-hang-ngay.component';
import {FormsModule} from "@angular/forms";
import { CalculatorComponent } from './03.Angular_Overview/practices/calculator/calculator.component';
import { ChoiceColorComponent } from './03.Angular_Overview/practices/choice-color/choice-color.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeComponent,
    PetComponent,
    BtHangNgayComponent,
    CalculatorComponent,
    ChoiceColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
