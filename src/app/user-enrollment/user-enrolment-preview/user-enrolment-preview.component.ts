import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-user-enrolment-preview',
  templateUrl: './user-enrolment-preview.component.html',
  styleUrls: ['./user-enrolment-preview.component.css']
})
export class UserEnrolmentPreviewComponent implements OnInit, OnChanges {
@Input() inputData;
modifiedDate;
  constructor() { 
    console.log('this is constructor method');
  }

  ngOnInit() {
    console.log('this is ngONinit method');
  }

  ngOnChanges(change: SimpleChanges){
    console.log('this is onChange Method', change);
  }


}
