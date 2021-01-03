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
import { Module5CaseStudyComponent } from './module5-case-study/module5-case-study.component';
import { ListStudentComponent } from './bt-hang-ngay/list-student/list-student.component';
import { StudentDetailsComponent } from './bt-hang-ngay/student-details/student-details.component';
import { HackerNewComponent } from './04.Component_And_Templet/practices/new/hacker-new/hacker-new.component';
import { NameCardComponent } from './05.Components_Interaction/practices/name-card/name-card.component';
import { ProgressBarComponent } from './05.Components_Interaction/practices/progress-bar/progress-bar.component';
import { CountdownTimerComponent } from './05.Components_Interaction/exercise/countdown-timer/countdown-timer.component';
import { LikesHackernewComponent } from './04.Component_And_Templet/practices/new/likes-hackernew/likes-hackernew.component';
import { AddNewHackerNewComponent } from './04.Component_And_Templet/practices/new/add-new-hacker-new/add-new-hacker-new.component';
import { TestJsonServerComponent } from './bt-hang-ngay/test-json-server/test-json-server.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    FontSizeComponent,
    PetComponent,
    BtHangNgayComponent,
    CalculatorComponent,
    ChoiceColorComponent,
    Module5CaseStudyComponent,
    ListStudentComponent,
    StudentDetailsComponent,
    HackerNewComponent,
    NameCardComponent,
    ProgressBarComponent,
    CountdownTimerComponent,
    LikesHackernewComponent,
    AddNewHackerNewComponent,
    TestJsonServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
