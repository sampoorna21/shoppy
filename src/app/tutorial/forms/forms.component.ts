import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  


  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(contactForm: { value: any; }){
console.log(contactForm.value)
  }
  }


