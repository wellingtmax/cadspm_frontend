import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ForumTopic } from '../interfaces/forum.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ForumService extends ApiService {
	private readonly endpoint = '/api/forum-topics';

	getAll(): Observable<ForumTopic[]> {
		return this.http.get<ForumTopic[]>(this.endpoint);
	}

	getById(id: number): Observable<ForumTopic> {
		return this.http.get<ForumTopic>(`${this.endpoint}/${id}`);
	}

	create(topic: Partial<ForumTopic>): Observable<ForumTopic> {
		return this.http.post<ForumTopic>(this.endpoint, topic);
	}

	update(id: number, topic: Partial<ForumTopic>): Observable<ForumTopic> {
		return this.http.put<ForumTopic>(`${this.endpoint}/${id}`, topic);
	}

	delete(id: number): Observable<void> {
		return this.http.delete<void>(`${this.endpoint}/${id}`);
	}
}
