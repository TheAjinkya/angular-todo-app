import { Injectable } from '@angular/core';
import { Server, ServerListResponse } from '../server.model';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private mockServers: Server[] = [
    { id: '1', name: 'Web Server 01', status: 'online' },
    { id: '2', name: 'Database Server', status: 'online' },
    { id: '3', name: 'App Server 02', status: 'maintenance' }
  ];

  getServers(): Observable<ServerListResponse> {
    return of({ servers: this.mockServers }).pipe(delay(500)); // Simulate API delay
  }
}
