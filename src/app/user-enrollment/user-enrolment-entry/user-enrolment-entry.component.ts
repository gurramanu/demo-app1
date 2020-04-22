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
  }

  butnClicked(val){
    console.log('button clicked', val.value);
    this.userName = val.value;
    this.newDate.emit('2020-04-20');
  }
  keyPressed(event){
    console.log('key pressssed',event);
    this.userName = event.target.value;
  }
}
