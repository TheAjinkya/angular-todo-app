import { Component, OnInit } from '@angular/core';
import { ReservationModel } from '../models/reservation';
import { ReservationService } from '../../services/reservation-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-list',
  imports: [],
  templateUrl: './reservation-list.html',
  styleUrl: './reservation-list.scss'
})
export class ReservationList implements OnInit {

  reservations: ReservationModel[] = [];
  loading = true;

  constructor(private reservationService: ReservationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCurrentBookings()
  }

  getCurrentBookings() {
    this.reservationService.read().subscribe((data) => {
      this.reservations = data;
      console.log("current reservations", data)
      this.loading = false;
    });
  }

  update(id: number) {
    this.router.navigate(['reservation', id])
  }

  delete(id: number) {
    const data = localStorage.getItem('reservations');
    const parsedData = data ? JSON.parse(data) : [];
    const modData = parsedData.filter((el: any) => el.id !== id)
    console.log("Deleted Data", modData)
    const modDataString = JSON.stringify(modData);
    localStorage.setItem('reservations', modDataString)
    this.getCurrentBookings();
  }

}
