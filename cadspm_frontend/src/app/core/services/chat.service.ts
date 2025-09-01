import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ChatRoom } from '../interfaces/chat.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ChatService extends ApiService {
	private readonly endpoint = '/api/chat-rooms';

	getAll(): Observable<ChatRoom[]> {
		return this.http.get<ChatRoom[]>(this.endpoint);
	}

	getById(id: number): Observable<ChatRoom> {
		return this.http.get<ChatRoom>(`${this.endpoint}/${id}`);
	}

	create(room: Partial<ChatRoom>): Observable<ChatRoom> {
		return this.http.post<ChatRoom>(this.endpoint, room);
	}

	update(id: number, room: Partial<ChatRoom>): Observable<ChatRoom> {
		return this.http.put<ChatRoom>(`${this.endpoint}/${id}`, room);
	}

	delete(id: number): Observable<void> {
		return this.http.delete<void>(`${this.endpoint}/${id}`);
	}
}
