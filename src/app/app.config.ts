import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { UserReducer } from './book-management/store/book.reducer';
import { provideEffects } from '@ngrx/effects';
import { BookEffect } from './book-management/store/book.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ user: UserReducer }),
    provideEffects([BookEffect]),
    provideHttpClient()
  ]
};
