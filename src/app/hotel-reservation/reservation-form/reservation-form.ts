import { NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { ReservationService } from '../../services/reservation-service';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationModel } from '../models/reservation';

@Component({
  selector: 'app-reservation-form',
  imports: [FormsModule, ReactiveFormsModule, NgClass],
  templateUrl: './reservation-form.html',
  styleUrl: './reservation-form.scss'
})
export class ReservationForm implements OnInit {
  private formBuilder = inject(FormBuilder);
  private reservationService = inject(ReservationService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  reservationForm!: FormGroup;
  currentReservation!: ReservationModel[]

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      checkInDate: [''],
      checkOutDate: [''],
      email: [''],
      contact: ['']
    })

    const currentId = this.route.snapshot.paramMap.get('id');
    if (currentId) {
      this.getCurrentBookings(parseInt(currentId))
    }

  }

  addReservation() {
    const currentValue = this.reservationForm.value
    if (currentValue) {
      const formData = { id: Date.now(), ...currentValue }
      this.reservationService.add(formData);
      this.router.navigate(["/view-reservations"])
    }

  }

  getCurrentBookings(currentId: number) {
    this.reservationService.read().subscribe((data: ReservationModel[]) => {
      const currentReservation = data.find(res => res.id === currentId)
      console.log("currentReservation", currentReservation)
      if (currentReservation)
        this.reservationForm.patchValue(currentReservation)
    });
  }

}
