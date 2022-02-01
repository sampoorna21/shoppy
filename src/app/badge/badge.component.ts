import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {
  count1=0;
  count2=30;
  increment(){
    this.count1++
    console.log(this.count1)
  }
  decrement(){
    this.count2--
    console.log(this.count2)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
