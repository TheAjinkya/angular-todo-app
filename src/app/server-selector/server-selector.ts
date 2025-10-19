import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, tap } from 'rxjs';
import { Server } from '../server-app/server.model';
import { ServerService } from '../server-app/services/server-service';

@Component({
  selector: 'app-server-selector',
  imports: [],
  templateUrl: './server-selector.html',
  styleUrl: './server-selector.scss'
})
export class ServerSelector {
  @Input() serverControl!: FormControl;

  servers$!: Observable<Server[]>;
  loading = false;

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.loading = true;
    this.servers$ = this.serverService.getServers().pipe(
      map(res => res.servers),
      tap(() => this.loading = false)
    );
  }
}
