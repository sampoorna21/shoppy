import { Component } from '@angular/core'

@Component({
  selector: 'app-weather-header',
  templateUrl: './weather-header.component.html',
  styleUrls: ['./weather-header.component.scss'],
})
export class WeatherHeaderComponent {
  constructor() {}

public date =new Date();

   id:any="home";

tabChange(ids:any){
  this.id=ids;
  
  console.log(this.id);
}
}
