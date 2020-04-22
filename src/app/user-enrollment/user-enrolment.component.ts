import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-enrolment',
  templateUrl: './user-enrolment.component.html',
  styleUrls: ['./user-enrolment.component.css']
})
export class UserEnrolmentComponent implements OnInit {

  todayDate = '2020-04-19';
  constructor() { }

  ngOnInit() {
  }
  gotData(val){
    console.log('got data ...........', val);
  }
}
