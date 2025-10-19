import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { delay, Observable, of } from 'rxjs';
import { ProductModel } from '../model/product';
import { User } from '../../book-management/model/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartAPIUrl = environment.apiUrl + "/cart"
  private checkoutAPIUrl = environment.apiUrl + "/checkout"

  private http = inject(HttpClient);

  getCartDetails(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.cartAPIUrl)
  }

  addToCart(product: ProductModel): Observable<ProductModel> {
    return this.http.post<ProductModel>(this.cartAPIUrl, product);
  }

  clearCart() {
    return this.http.delete(this.cartAPIUrl)
  }

  checkoutCart(allProducts: ProductModel[]): Observable<void> {
    return this.http.post<void>(this.checkoutAPIUrl, allProducts)
  }

  createUser(user: User): Observable<User> {
    return of({
      ...user,
      userId: Date.now().toString(), // Simulate server-generated ID
      createdAt: new Date() // Simulate server-added timestamp
    }) // Simulate network delay
  }

}
