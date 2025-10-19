import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatList, MatListModule } from '@angular/material/list';
import { CartService } from '../services/cart.service';
import { ProductModel } from '../model/product';
import { map, Observable, Subject, switchMap, take, takeUntil } from 'rxjs';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cart',
  imports: [MatCardModule, MatListModule, CurrencyPipe, AsyncPipe, MatButtonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart implements OnInit {

  private destroy$ = new Subject<void>();
  private cartService = inject(CartService);

  totalCost = 0;


  loading = false;
  errorMessasge = ''

  cartData!: ProductModel[]
  cartData$!: Observable<ProductModel[]>;
  totalCost$!: Observable<number>;

  ngOnInit() {
    this.getCartData();
  }

  getCartData() {
    // this.cartService.getCartDetails().pipe(takeUntil(this.destroy$)).subscribe({
    //   next: (res: ProductModel[]) => {
    //     this.cartData = res;
    //   },
    //   error: (error) => {
    //     this.errorMessasge = error;
    //   }
    // })

    this.cartData$ = this.cartService.getCartDetails();
    this.totalCost$ = this.cartService.getCartDetails().pipe(map((products: ProductModel[]) => products.reduce((sum, item) => sum + Number(item.price), 0)))

  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  clearCart() {
    this.cartService.clearCart().subscribe();
  }

  checkout() {
    this.cartData$.pipe(take(1), switchMap(cart => this.cartService.checkoutCart(cart))
    ).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  // getTotalCost() {
  //   this.cardData$.subscribe((response: ProductModel[]) => {
  //     const array = response;
  //     for (let i = 0; i < array.length; i++) {
  //       const element = array[i];
  //       this.totalCost = this.totalCost + parseInt(element.price);
  //     }
  //     return this.totalCost;
  //   })
  // }

}
