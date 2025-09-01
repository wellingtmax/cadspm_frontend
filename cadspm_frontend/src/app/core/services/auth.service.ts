import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
	private readonly TOKEN_KEY = 'auth_token';
	private readonly USER_KEY = 'auth_user';

	login(token: string, user: User) {
		localStorage.setItem(this.TOKEN_KEY, token);
		localStorage.setItem(this.USER_KEY, JSON.stringify(user));
	}

	logout() {
		localStorage.removeItem(this.TOKEN_KEY);
		localStorage.removeItem(this.USER_KEY);
	}

	isAuthenticated(): boolean {
		return !!localStorage.getItem(this.TOKEN_KEY);
	}

	getUser(): User | null {
		const user = localStorage.getItem(this.USER_KEY);
		return user ? JSON.parse(user) : null;
	}
}
