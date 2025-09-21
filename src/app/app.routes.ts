import { Routes } from '@angular/router';
import { Task } from './task/task';
import { ReservationForm } from './hotel-reservation/reservation-form/reservation-form';
import { ReservationList } from './hotel-reservation/reservation-list/reservation-list';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
    { path: '', component: Dashboard },
    { path: 'task', component: Task },
    { path: 'reservation', component: ReservationForm },
    { path: 'reservation/:id', component: ReservationForm },
    { path: 'view-reservations', component: ReservationList }
];
