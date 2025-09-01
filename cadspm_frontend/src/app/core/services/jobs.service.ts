import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Job } from '../interfaces/job.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class JobsService extends ApiService {
	private readonly endpoint = '/api/jobs';

	getAll(): Observable<Job[]> {
		return this.http.get<Job[]>(this.endpoint);
	}

	getById(id: number): Observable<Job> {
		return this.http.get<Job>(`${this.endpoint}/${id}`);
	}

	create(job: Partial<Job>): Observable<Job> {
		return this.http.post<Job>(this.endpoint, job);
	}

	update(id: number, job: Partial<Job>): Observable<Job> {
		return this.http.put<Job>(`${this.endpoint}/${id}`, job);
	}

	delete(id: number): Observable<void> {
		return this.http.delete<void>(`${this.endpoint}/${id}`);
	}
}
