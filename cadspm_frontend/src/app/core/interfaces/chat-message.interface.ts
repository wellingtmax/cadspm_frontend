import { ChatRoom } from './chat.interface';
import { User } from './user.interface';

export interface ChatMessage {
  id: number;
  room: ChatRoom;
  sender: User;
  content: string;
  messageType: string;
  isRead: boolean;
  createdAt: string;
}
