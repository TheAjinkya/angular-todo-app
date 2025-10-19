import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CreateUser } from '../store/book.actions';

@Component({
  selector: 'app-create-books',
  imports: [ReactiveFormsModule],
  templateUrl: './create-books.html',
  styleUrl: './create-books.scss'
})
export class CreateBooks implements OnInit{

  userForm!: FormGroup

  private store = inject(Store);

  constructor(private formBuilder: FormBuilder){
    this.userForm = new FormGroup({
      firstName: new FormControl('Ajinkya 2'),
      lastName: new FormControl('Chanshetty 2'),
      id: new FormControl('10')
    })
  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log("Values", this.userForm.value)
    const newUser = {userId: this.userForm.value.id, ...this.userForm.value};
    this.store.dispatch(CreateUser({user:newUser}));
  }

}
