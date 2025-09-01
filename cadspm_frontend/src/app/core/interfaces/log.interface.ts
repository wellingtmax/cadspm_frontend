import { User } from './user.interface';
export interface ActivityLog {
	id: number;
	user: User;
	activityType: string;
	description?: string;
	ipAddress?: string;
	userAgent?: string;
	createdAt: string;
}
