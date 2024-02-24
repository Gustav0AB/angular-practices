import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/interfaces'
import { CartService } from '../../services/cartService/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product!: Product;

  constructor (private cartService: CartService) {}

  seeDetails(productDetail: Product){
    console.log(productDetail);
  }
  addToCart(product: Product){
    this.cartService.addProduct(product);
  }
}
