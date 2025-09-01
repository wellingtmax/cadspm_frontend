import { User } from './user.interface';
export interface ChatRoom {
	id: number;
	name?: string;
	isGroup: boolean;
	createdBy: User;
	createdAt: string;
}
