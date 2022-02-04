import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  isDisabled=true
productName="A scale";
products=['A Book','A pen']

  constructor() { 
    setTimeout(()=>{
      this.isDisabled=false
      // this.productName='A Tree'
    },1500)
   }

  ngOnInit(): void {
  }
  onAddProduct(){
this.products.push(this.productName)
  }
onRemoveProduct(productName: string){
  this.products=this.products.filter(p=> p!==productName)

}
}
