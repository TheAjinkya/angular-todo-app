import { createAction, props } from "@ngrx/store";
import { Book, User } from "../model/book";

export const CreateUser = createAction('[User] Create User', props<{user:User}>());

export const CreateUserSuccess = createAction('[User] Create User Success', props<{user:User}>());

export const CreateUserFailure = createAction('[User] Create User Failure', props<{error:string}>());

export const deleteUser = createAction('[User] Delete user', props<{ userId: string }>());

export const AddBook = createAction('[Book] Add Book', props<{book: Book}>());

export const RemoveBook = createAction('[Book] Remove Book', props<{id: string}>());