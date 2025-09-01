import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ActivityLog } from '../interfaces/log.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LogsService extends ApiService {
	private readonly endpoint = '/api/activity-logs';

	getAll(): Observable<ActivityLog[]> {
		return this.http.get<ActivityLog[]>(this.endpoint);
	}

	getById(id: number): Observable<ActivityLog> {
		return this.http.get<ActivityLog>(`${this.endpoint}/${id}`);
	}

	create(log: Partial<ActivityLog>): Observable<ActivityLog> {
		return this.http.post<ActivityLog>(this.endpoint, log);
	}

	update(id: number, log: Partial<ActivityLog>): Observable<ActivityLog> {
		return this.http.put<ActivityLog>(`${this.endpoint}/${id}`, log);
	}

	delete(id: number): Observable<void> {
		return this.http.delete<void>(`${this.endpoint}/${id}`);
	}
}
