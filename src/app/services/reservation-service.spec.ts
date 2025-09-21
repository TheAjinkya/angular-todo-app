import { TestBed } from '@angular/core/testing';
import { Reservation } from '../hotel-reservation/reservation/reservation';


describe('Reservation', () => {
  let service: Reservation;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Reservation);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
