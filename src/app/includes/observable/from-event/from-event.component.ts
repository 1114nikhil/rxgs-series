import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from '../../../service/design-utility.service';

@Component({
  selector: 'app-from-event',
  standalone: true,
  imports: [],
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.scss'
})
export class FromEventComponent implements OnInit,AfterViewInit{
  @ViewChild('addBtn') addBtn!: ElementRef;
 
  constructor(private _designUtility:DesignUtilityService){}
  ngAfterViewInit(): void {
    let count=1;
   fromEvent(this.addBtn.nativeElement,'click').subscribe(res=>{
    let countVal="Video "+count++;
      console.log(countVal)
      this._designUtility.elPrint(countVal,"elContainer");
      this._designUtility.elPrint(countVal,"elContainer2");
       
    });
  }

  ngOnInit(): void {
    
  }

 

}
