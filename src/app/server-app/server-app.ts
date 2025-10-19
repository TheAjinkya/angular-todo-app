import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { Confirmation } from './confirmation/confirmation';


@Component({
  selector: 'app-server-app',
  standalone:true,
  imports: [FormsModule, MatButton, MatDatepickerModule, MatTimepickerModule, ReactiveFormsModule,
    MatFormFieldModule, MatDatepickerModule, MatSelectModule, MatNativeDateModule, MatInputModule],
  templateUrl: './server-app.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './server-app.scss'
})
export class ServerApp implements OnInit{

  serverForm!: FormGroup;
  private formBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.serverForm = this.formBuilder.group({
      serverName: new FormControl(''),
      startDate: new FormControl(''),
      startTime: new FormControl('')
    })
  }

  readonly dialog = inject(MatDialog);

  selectedValue = ''
  value: Date | undefined;
  
  serverNames: any[] = [
    { value: 'server-0', viewValue: 'server-0' },
    { value: 'server-1', viewValue: 'server-1' },
    { value: 'server-2', viewValue: 'server-2' },
  ];
  picker: any;

  onSubmit() {
    this.selectedValue = JSON.stringify(this.serverForm.value);
    console.log(this.serverForm.value)
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(Confirmation, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,

    });
  }
}

