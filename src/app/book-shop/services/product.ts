import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../model/product';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class Product {

  private http = inject(HttpClient);

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(environment.apiUrl + '/products')
  }

}
