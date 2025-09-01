import { User } from './user.interface';
export interface Gallery {
	id: number;
	title: string;
	description?: string;
	imageUrl: string;
	altText: string;
	eventName?: string;
	batch?: string;
	uploadedBy: User;
	isActive: boolean;
	createdAt: string;
}
