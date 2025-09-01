import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Gallery } from '../interfaces/gallery.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GalleryService extends ApiService {
	private readonly endpoint = '/api/gallery';

	getAll(): Observable<Gallery[]> {
		return this.http.get<Gallery[]>(this.endpoint);
	}

	getById(id: number): Observable<Gallery> {
		return this.http.get<Gallery>(`${this.endpoint}/${id}`);
	}

	create(gallery: Partial<Gallery>): Observable<Gallery> {
		return this.http.post<Gallery>(this.endpoint, gallery);
	}

	update(id: number, gallery: Partial<Gallery>): Observable<Gallery> {
		return this.http.put<Gallery>(`${this.endpoint}/${id}`, gallery);
	}

	delete(id: number): Observable<void> {
		return this.http.delete<void>(`${this.endpoint}/${id}`);
	}
}
