import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
private products=['A Book'];
  constructor() { }

  addProduct(productName:string){
this.products.push(productName);
  }
  getProducts(){
    return [...this.products];
  }
}
