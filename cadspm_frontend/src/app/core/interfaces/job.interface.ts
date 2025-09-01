import { User } from './user.interface';
export interface Job {
	id: number;
	title: string;
	description: string;
	company: string;
	externalLink?: string;
	postedBy: User;
	isActive: boolean;
	createdAt: string;
	updatedAt: string;
}
