import { User } from './user.interface';
import { ChatRoom } from './chat.interface';

export interface ChatParticipant {
  id: number;
  user: User;
  room: ChatRoom;
  joinedAt: string;
}
