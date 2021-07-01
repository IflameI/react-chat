export type authorInfo = {
  fullname: string;
  avatar: string | null;
  isOnline: boolean;
  _id: string;
};

export type partnerInfo = {
  fullname: string;
  avatar: string | null;
  isOnline: boolean;
  _id: string;
};

export type lastMessageInfo = {
  updatedAt: string;
  text: string;
  read: boolean;
};

export type userData = {
  author: authorInfo;
};

export interface IDialogsListItem {
  author: authorInfo;
  partner: partnerInfo;
  _id: string;
  lastMessage: lastMessageInfo;
  countUnRead?: number;
  isMe: boolean;
  user: userData;
  currentDialogsId: string;
}
