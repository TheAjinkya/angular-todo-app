import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-shop',
  imports: [RouterLink, MatButtonModule, MatToolbarModule, RouterModule],
  templateUrl: './book-shop.html',
  styleUrl: './book-shop.scss'
})
export class BookShop {

}
