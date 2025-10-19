import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../services/product';
import { ProductModel } from '../model/product';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../services/cart.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-product-list',
  imports: [MatCardModule, MatButtonModule, CurrencyPipe,
    ReactiveFormsModule, MatFormFieldModule, MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList implements OnInit {
  value = '';
  private _snackBar = inject(MatSnackBar);
  emailFormControl = new FormControl('', [Validators.required]);

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  products!: ProductModel[]
  filteredProducts!: ProductModel[]

  ngOnInit(): void {
    this.getProductDetails();
  }

  private productService = inject(Product);
  private cartService = inject(CartService);

  getProductDetails() {
    this.productService.getProducts().subscribe((res) => {
      console.log("Product", res)
      this.products = res;
      this.filteredProducts = this.products;
    })
  }

  addToCart(product: ProductModel) {
    this.cartService.addToCart(product).subscribe({
      next: (res) => {
        console.log("Added to cart")
        this._snackBar.open('Added to cart!', 'close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 900,
        });
      }, error: (error) => {
        console.log("Failed to add", error)
      }
    });
  }

  sortPrice(eventValue: string) {
    if(eventValue=='low'){
      this.filteredProducts.sort((a: any, b:any) => a.price - b.price)
    }else{
      this.filteredProducts.sort((a: any, b: any) => b.price - a.price)
    }
  }

  applyFilter(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value;
    console.log("searchValue", searchValue)
    this.filteredProducts = this.products.filter(res => res.name?.toLocaleLowerCase().includes(searchValue))
  }

}
