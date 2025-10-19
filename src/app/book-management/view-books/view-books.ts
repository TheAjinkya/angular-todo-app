import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../model/book';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-view-books',
  imports: [AsyncPipe, NgIf, NgFor],
  templateUrl: './view-books.html',
  styleUrl: './view-books.scss'
})
export class ViewBooks implements OnInit{
  private store = inject(Store);

  user$!: Observable<User[]>;
  ngOnInit(): void {
    this.user$ = this.store.select('user')
  }
}
