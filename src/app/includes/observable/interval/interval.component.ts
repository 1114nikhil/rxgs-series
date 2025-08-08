import { Component, OnInit } from '@angular/core';
import { interval, Subscribable, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from '../../../service/design-utility.service';

@Component({
  selector: 'app-interval',
  standalone: true,
  imports: [],
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.scss'
})
export class IntervalComponent implements OnInit{
  obsMsg: string ="";
  videoSubscription!: Subscription;
  constructor(private _designUtility:DesignUtilityService) { }
  ngOnInit(): void {
    // const broadcast = interval(1000);
    const broadcast = timer(5000,1000);
    this.videoSubscription=broadcast.subscribe((res) => {
      console.log(res);
      this.obsMsg = 'Video ' + res ;

      this._designUtility.elPrint('Video ' + res, 'elContainer');
      this._designUtility.elPrint('Video ' + res, 'elContainer2');
      this._designUtility.elPrint('Video ' + res, 'elContainer3');

      if(res === 5) {
        this.videoSubscription.unsubscribe();
        this.obsMsg = 'Video Stopped';
      }
    })
  }

}
