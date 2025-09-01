import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { User } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersService extends ApiService {
	private readonly endpoint = '/api/users';

	getAll(): Observable<User[]> {
		return this.http.get<User[]>(this.endpoint);
	}

	getById(id: number): Observable<User> {
		return this.http.get<User>(`${this.endpoint}/${id}`);
	}

	create(user: Partial<User>): Observable<User> {
		return this.http.post<User>(this.endpoint, user);
	}

	update(id: number, user: Partial<User>): Observable<User> {
		return this.http.put<User>(`${this.endpoint}/${id}`, user);
	}

	delete(id: number): Observable<void> {
		return this.http.delete<void>(`${this.endpoint}/${id}`);
	}
}
