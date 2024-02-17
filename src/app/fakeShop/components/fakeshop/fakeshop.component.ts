import { Component } from '@angular/core';
import { Products } from '../../test-data/data';
import { Product } from '../../interfaces/interfaces';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component'

@Component({
  selector: 'app-fakeshop',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './fakeshop.component.html',
  styleUrl: './fakeshop.component.scss'
})
export class FakeshopComponent {
  products: Array<Product> = Products;

}
