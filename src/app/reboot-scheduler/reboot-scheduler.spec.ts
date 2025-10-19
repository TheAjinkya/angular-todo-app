import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RebootScheduler } from './reboot-scheduler';

describe('RebootScheduler', () => {
  let component: RebootScheduler;
  let fixture: ComponentFixture<RebootScheduler>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RebootScheduler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RebootScheduler);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
