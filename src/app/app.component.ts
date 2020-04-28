import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-app1';
  btnName = 'Odd';
  displaySelected = true;
  numberArray = [1, 2, 3, 4, 5];
  evenArray = [2,4];
  oddArray = [1,3,5];
  toggleEvenOdd() {
    this.displaySelected = this.displaySelected ? false : true;
    this.btnName = this.displaySelected ? 'Odd' : 'Even';
    this.numberArray =  this.numberArray.map(val => {
     return val = val+1})
    this.numberArray.forEach(function(ab){
      console.log('displayyyyyyyyyy', ab);
    });
  }
}
