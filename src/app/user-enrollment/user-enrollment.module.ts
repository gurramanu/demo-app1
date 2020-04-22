import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule, } from '@angular/common';
import { UserEnrolmentComponent } from './user-enrolment.component';
import { UserEnrolmentEntryComponent } from './user-enrolment-entry/user-enrolment-entry.component';
import { UserEnrolmentPreviewComponent } from './user-enrolment-preview/user-enrolment-preview.component';
import { UserEnrolmentConfirmComponent } from './user-enrolment-confirm/user-enrolment-confirm.component';



@NgModule({
  declarations: [UserEnrolmentComponent, UserEnrolmentEntryComponent, UserEnrolmentPreviewComponent, UserEnrolmentConfirmComponent],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[UserEnrolmentComponent]
})
export class UserEnrollmentModule { }
