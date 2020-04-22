import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserEnrollmentModule } from './user-enrollment/user-enrollment.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, UserEnrollmentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
