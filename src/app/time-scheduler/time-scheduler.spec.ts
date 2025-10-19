import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeScheduler } from './time-scheduler';

describe('TimeScheduler', () => {
  let component: TimeScheduler;
  let fixture: ComponentFixture<TimeScheduler>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeScheduler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeScheduler);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
