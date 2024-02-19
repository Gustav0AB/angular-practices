import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Product } from '../../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private API_URL = 'https://fakestoreapi.com/products';

  constructor(private http : HttpClient) { }

  public getAllProducts(): Observable<Product[] | undefined>{
    return this.http.get<Product[]>(this.API_URL).pipe(
      catchError((error: any) => {
        console.log(error);
        return of(undefined);
      })
    )
  }
}
