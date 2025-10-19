import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from './model/book';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { CreateUser, deleteUser } from './store/book.actions';

@Component({
  selector: 'app-book-management',
  imports: [RouterLink, MatButtonModule, MatToolbarModule, RouterModule, AsyncPipe, NgFor, NgIf],
  templateUrl: './book-management.html',
  styleUrl: './book-management.scss'
})
export class BookManagement implements OnInit {

  private store = inject(Store);

  user$ = this.store.select('user')

  firstUser: User = { firstName: 'Yuvaan', lastName: 'Chanshetty', userId: '2' }

  createNewUser = () => {
    this.store.dispatch(CreateUser({user:this.firstUser}))
  }

  deleteCurrentUser = () => {
    this.store.dispatch(deleteUser({ userId:'1'}))
  }

  ngOnInit(): void {
    this.user$.subscribe(res => {
      console.log(res)
    })
  }

}
