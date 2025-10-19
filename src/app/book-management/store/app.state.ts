import { Book, User } from "../model/book";

export interface AppState {
    readonly book: Book[]
    readonly user: User[]
}
