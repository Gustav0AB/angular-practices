import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../interfaces/interfaces'

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product!: Product;

  seeDetails(productDetail: Product){
    console.log(productDetail);
  }
}
