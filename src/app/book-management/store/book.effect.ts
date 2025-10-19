import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CartService } from "../../book-shop/services/cart.service";
import { CreateUser, CreateUserFailure, CreateUserSuccess } from "./book.actions";
import { catchError, map, mergeMap, of, tap } from "rxjs";

export class BookEffect {

    private actions$ = inject(Actions);

    private cartService = inject(CartService);

    bookEffect = createEffect(() => {
        return this.actions$.pipe(ofType(CreateUser),
            mergeMap((action) => this.cartService.createUser(action.user).pipe(
                tap(console.log),
                map(user => CreateUserSuccess({ user })),
                catchError(error => of(CreateUserFailure(error)))
            ))
        )
    })

}