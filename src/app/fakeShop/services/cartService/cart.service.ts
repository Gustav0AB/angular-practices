import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartProducts: Product[] = [];

  private _products: BehaviorSubject<Product[]>;


  constructor() { this._products = new BehaviorSubject<Product[]>([]);}

  get products(){
    return this._products.asObservable();
  }

  addProduct(product: Product){
    this.cartProducts.push(product);
    this._products.next(this.cartProducts);
  }
  
  deleteProduct(index: number){
    this.cartProducts.splice(index, 1);
    this._products.next(this.cartProducts)
  }
}
