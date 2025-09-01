export interface User {
	id: number;
	name: string;
	email: string;
	passwordHash: string;
	profilePictureUrl?: string;
	education?: string;
	userType: 'student' | 'superadmin';
	isActive: boolean;
	createdAt: string;
	updatedAt: string;
	lastLogin?: string;
}
