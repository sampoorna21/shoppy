import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {
  count1=0;
  count2=30;
  count3=1;
  increment(): void{
    this.count1++
    console.log(this.count1)
  }
  decrement(){
    this.count2--
    console.log(this.count2)
  }
 multiply(){
    this.count3=this.count3*5;
    console.log(this.count3)
  }



  constructor() { }

  ngOnInit(): void {
  }

}
