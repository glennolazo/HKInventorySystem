import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dashboard } from './dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private httpClient: HttpClient) {}

  getByID(id: number): Observable<Dashboard> {
    return this.httpClient.get<Dashboard>('');
  }
}
