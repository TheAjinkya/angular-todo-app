import { Routes } from '@angular/router';
import { Task } from './task/task';
import { ReservationForm } from './hotel-reservation/reservation-form/reservation-form';
import { ReservationList } from './hotel-reservation/reservation-list/reservation-list';
import { Dashboard } from './dashboard/dashboard';
import { ProductList } from './book-shop/product-list/product-list';
import { BookShop } from './book-shop/book-shop';
import { Cart } from './book-shop/cart/cart';
import { BookManagement } from './book-management/book-management';
import { ViewBooks } from './book-management/view-books/view-books';
import { CreateBooks } from './book-management/create-books/create-books';
import { ServerApp } from './server-app/server-app';

export const routes: Routes = [
    { path: '', component: Dashboard },
    { path: 'task', component: Task },
    { path: 'reservation', component: ReservationForm },
    { path: 'reservation/:id', component: ReservationForm },
    { path: 'view-reservations', component: ReservationList },
    { path: 'server', component: ServerApp },
    {
        path: 'shop', component: BookShop, children: [
            { path: 'productlist', component: ProductList },
            { path: 'cart', component: Cart }
        ]
    },
    {
        path: 'user', component: BookManagement, children: [
            { path: 'create', component: CreateBooks },
            { path: 'view', component: ViewBooks }
        ]
    },

];
