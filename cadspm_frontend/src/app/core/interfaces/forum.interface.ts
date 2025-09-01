import { ForumCategory } from './forum-category.interface';
import { User } from './user.interface';
export interface ForumTopic {
	id: number;
	title: string;
	content: string;
	category: ForumCategory;
	createdBy: User;
	isPinned: boolean;
	isLocked: boolean;
	viewCount: number;
	createdAt: string;
	updatedAt: string;
}
