import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ReservationModel } from '../hotel-reservation/models/reservation';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private demoReservations: ReservationModel[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      checkInDate: '2025-09-21',
      checkOutDate: '2025-09-25',
      email: 'john.doe@example.com',
      contact: '1234567890',
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      checkInDate: '2025-09-22',
      checkOutDate: '2025-09-26',
      email: 'jane.smith@example.com',
      contact: '0987654321',
    },
  ];


  add(reservationData: ReservationModel) {
    if (reservationData) {
      try {
        const data = localStorage.getItem('reservations');
        const parsedData: ReservationModel[] = data ? JSON.parse(data) : [];
        const modData = [...parsedData, reservationData];
        const reservationDataString = JSON.stringify(modData);
        localStorage.setItem('reservations', reservationDataString);
      } catch (error) {
        console.error("Error adding reservation:", error);
      }
    }
  }

  read() {
    try {
      const data = localStorage.getItem('reservations');
      const parsedData = data ? JSON.parse(data) : null;
      console.log("parsedData", parsedData);

      if (parsedData) {
        return of([...parsedData, ...this.demoReservations]);
      } else {
        return of([...this.demoReservations]);
      }
    } catch (error) {
      console.error("Error parsing reservations:", error);
      return of([...this.demoReservations]);
    }
  }


}
