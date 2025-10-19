import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RebootService } from '../server-app/services/reboot-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RebootFormValue, RebootSchedule } from '../server-app/server.model';

@Component({
  selector: 'app-reboot-scheduler',
  imports: [],
  templateUrl: './reboot-scheduler.html',
  styleUrl: './reboot-scheduler.scss'
})
export class RebootScheduler {
  rebootForm: FormGroup;
  loading = false;
  message = '';
  success = false;

  constructor(
    private fb: FormBuilder,
    private rebootService: RebootService,
    private snackBar: MatSnackBar
  ) {
    this.rebootForm = this.fb.group<RebootFormValue>({
      server: [null, Validators.required],
      time: [null, [Validators.required, this.futureDateValidator.bind(this)]]
    });
  }

  onSubmit() {
    if (this.rebootForm.valid) {
      this.loading = true;
      this.message = ''; // Clear previous
      const schedule: RebootSchedule = {
        serverId: this.rebootForm.value.server!.id,
        scheduledTime: this.rebootForm.value.time!
      };
      this.rebootService.scheduleReboot(schedule).subscribe({
        next: (res) => {
          this.message = res.message;
          this.success = res.success;
          this.loading = false;
          this.snackBar.open(this.message, 'Close', { duration: 3000 });
          if (res.success) this.rebootForm.reset();
        },
        error: (err) => {
          this.message = err.message || 'Failed to schedule reboot.';
          this.success = false;
          this.loading = false;
          this.snackBar.open(this.message, 'Close', { duration: 3000 });
        }
      });
    }
  }

  private futureDateValidator(control: any) {
    const selectedDate = control.value;
    return selectedDate && selectedDate > new Date() ? null : { pastDate: true };
  }
}
