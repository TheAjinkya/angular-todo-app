import { createReducer, on } from "@ngrx/store";
import { CreateUser, CreateUserFailure, CreateUserSuccess, deleteUser } from "./book.actions";
import { User } from "../model/book";

export const initlaState: User[] = [{ firstName: 'Ajinkya1', lastName: 'Chanshetty1', userId: '1' }]

export const UserReducer = createReducer(initlaState,
    on(CreateUser, (state, action) => state),
    on(CreateUserSuccess, (state, action) => [...state, action.user]),
    on(CreateUserFailure, (state, action) => {  
        console.error('Failed to create user:', action.error);
       return state;
    }),
    on(deleteUser, (state, action) => {
        return state.filter(el => el.userId !== action.userId)
    }))
    