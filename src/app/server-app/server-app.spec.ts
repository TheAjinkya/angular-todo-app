import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerApp } from './server-app';

describe('ServerApp', () => {
  let component: ServerApp;
  let fixture: ComponentFixture<ServerApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
