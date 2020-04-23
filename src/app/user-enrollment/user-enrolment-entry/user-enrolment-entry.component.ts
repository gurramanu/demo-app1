import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-enrolment-entry',
  templateUrl: './user-enrolment-entry.component.html',
  styleUrls: ['./user-enrolment-entry.component.css']
})
export class UserEnrolmentEntryComponent implements OnInit {
  
  @Input() date:string;
  @Output() newDate = new EventEmitter();
  userName;
  lname;
  constructor() { }

  ngOnInit() {
    console.log('-----name--------',name);
  }
sampleMethod(){
  console.log('sample Method');
  return 'sample Method';
}
  butnClicked(val){
    console.log('button clicked', val);
    this.userName = val.value;
    this.newDate.emit('2020-04-20');
  }
  keyPressed(ee){
    console.log('key pressssed', ee);
    this.userName = ee.target.value;
  }
}
