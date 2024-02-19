import { Component } from '@angular/core';
import { CartService } from '../../services/cartService/cart.service';
import { Product } from '../../interfaces/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  products: Product[] = [];
  
  constructor(private cartService: CartService) {}
  ngOnInit(){
    this.cartService.products.subscribe(products => {
      this.products = products;
    });
  }
  removeElement(index: number){
    this.cartService.deleteProduct(index);
  }
}
