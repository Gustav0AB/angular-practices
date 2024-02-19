import { Component, inject } from '@angular/core';
import { Products } from '../../test-data/data';
import { Product } from '../../interfaces/interfaces';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { ProductsService} from '../../services/productService/products.service'
import { CartComponent } from '../cart/cart.component';
//import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-fakeshop',
  standalone: true,
  imports: [CommonModule, ProductComponent, CartComponent],
  templateUrl: './fakeshop.component.html',
  styleUrl: './fakeshop.component.scss'
})
export class FakeshopComponent {

  constructor(private productService: ProductsService){}

  //products: Array<Product> = Products;
  products: Product[] | undefined;
  
  //forma 1
  //http = inject(HttpClient);

  ngOnInit(){
    //forma 1
    /*this.http.get<Product[]>('https://fakestoreapi.com/products').subscribe((data) =>{
      this.products = data;
    });*/

    //forma 2
    this.productService.getAllProducts().subscribe(
      {
        next: (data: Product[] | undefined) => {
          this.products = data;
        },
        error: (err) => {
          console.log(err)
        }

      }
    )
  }


}
