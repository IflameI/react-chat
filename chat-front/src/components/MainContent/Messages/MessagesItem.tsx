/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';

import { Avatar, useTime } from '../..';
import { userType } from '../../../types/messagesItemTypes';

interface IMessages {
  avatar: string;
  text: string;
  audio: string;
  user: userType;
  isMe: boolean;
  updatedAt: string;
}

const MessagesItem: React.FC<IMessages> = ({ text, user, updatedAt }) => {
  const { time } = useTime(updatedAt);
  return (
    <>
      <div className='dialogs-content__message'>
        <div className='dialogs-content__info'>
          <div className='dialogs-content__img avatar'>
            <Avatar author={user} />
          </div>
          <div className='dialogs-content__name'>{user.fullname}</div>
          <div className='main-column-left__time'>{time}</div>
        </div>
        <div className='dialogs-content__main'>
          <p className='dialogs-content__text'>{text}</p>
        </div>
      </div>
    </>
  );
};

export default MessagesItem;
