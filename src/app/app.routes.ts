import { Routes } from '@angular/router';
import { Task } from './task/task';
import { Dashboard } from './dashboard/dashboard';
import { ReservationForm } from './hotel-reservation/reservation-form/reservation-form';
import { ReservationList } from './hotel-reservation/reservation-list/reservation-list';

export const routes: Routes = [
    { path: '', component: Dashboard },
    { path: 'task', component: Task },
    { path: 'new', component: ReservationForm },
    { path: 'list', component: ReservationList }
];
