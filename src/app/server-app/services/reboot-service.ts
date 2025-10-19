import { Injectable } from '@angular/core';
import { RebootSchedule, ScheduleResponse } from '../server.model';
import { delay, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RebootService {
  private apiUrl = '/api/reboots'; // Mock – no real HTTP

  scheduleReboot(schedule: RebootSchedule): Observable<ScheduleResponse> {
    // Simulate success (80% chance) with delay
    const success = Math.random() > 0.2;
    const response: ScheduleResponse = success
      ? { success: true, message: 'Reboot scheduled successfully!', scheduleId: '123' }
      : { success: false, message: 'Failed to schedule: Server busy.' };

    return success
      ? of(response).pipe(delay(1000))
      : throwError(() => new Error(response.message)).pipe(delay(1000));
  }

}
