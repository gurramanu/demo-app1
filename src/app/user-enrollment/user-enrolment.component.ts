import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { UserEnrolmentEntryComponent } from './user-enrolment-entry/user-enrolment-entry.component';

@Component({
  selector: 'app-user-enrolment',
  templateUrl: './user-enrolment.component.html',
  styleUrls: ['./user-enrolment.component.css']
})
export class UserEnrolmentComponent implements OnInit, AfterViewInit {

  @ViewChild(UserEnrolmentEntryComponent, {static:true}) entryComponent: UserEnrolmentEntryComponent;
  @ViewChild('sampleTag',{static: true}) sampleTag: ElementRef;
  todayDate = '2000';
  constructor() { }

  ngOnInit() {
    console.log('=-----ngOnInit------', this.sampleTag.nativeElement.innerHTML);
  }
  gotData(val, third){
    console.log('got data ...........', val);

    console.log('second Valueeeee ...........', this.entryComponent.sampleMethod());
    console.log('third value', third);
  }
  ngAfterViewInit(){
    console.log('=-----ngAfterViewInit------', this.sampleTag.nativeElement.innerHTML);
  }
}
