export type userData = {
  _id: string;
  fullname: string;
  avatar: string | null;
  isOnline: boolean;
};

export type itemsData = {
  _id: number;
  user: userData;
  text: string;
  isRead: boolean;
  created_at: string;
  countUnRead?: number;
};
