import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from '../../../service/design-utility.service';

@Component({
  selector: 'app-of-from',
  standalone: true,
  imports: [],
  templateUrl: './of-from.component.html',
  styleUrl: './of-from.component.scss'
})
export class OfFromComponent implements OnInit {
  obsMsg: any;
  constructor(private _designUtility:DesignUtilityService) { }

  ngOnInit(): void {
  // #region OF
    const obsr1 =of("Nikhil", "Nithin", "Nidhish")

    obsr1.subscribe((res) => {
      console.log(res);
       this._designUtility.elPrint( res, 'elContainer');
    });
    const obsr2 =of({a:"Nikhil", b:"Nithin", c:"Nidhish"})

    obsr2.subscribe((res) => {
      console.log(res);
      //  this._designUtility.elPrint( JSON.stringify(res), 'elContainer2');
      this.obsMsg=res;
      this._designUtility.elPrint( `a: ${this.obsMsg.a}`, 'elContainer2');
      this._designUtility.elPrint(`b: ${this.obsMsg.b}`, 'elContainer2');
      this._designUtility.elPrint( `c: ${this.obsMsg.c}`, 'elContainer2');
    });
    // #endregion 

// #region From 
    const obsr3 = from(["JavaScript", "Java", "Python"]);
    obsr3.subscribe((res) => {
      console.log(res);
      this._designUtility.elPrint( res, 'elContainer3');
    });
// #endregion From

// #region FROM - Promise 
const obsr4 = new Promise((resolve, reject) => {
  setTimeout(() => {  
    resolve("Promise Resolved");
  }, 2000);
});

obsr4.then((res) => {  
  console.log(res);
  this._designUtility.elPrint( res, 'elContainer4');
})
  .catch((err) => {
    console.error(err); });
// #endregion FROM - Promise

// #region FROM - String
 const obsr5 = from("Welcome to RxJS ");
  obsr5.subscribe((res) => {
        console.log(res);
        this._designUtility.elPrint( res, 'elContainer5');
      });
// #endregion FROM - String
  }

}
