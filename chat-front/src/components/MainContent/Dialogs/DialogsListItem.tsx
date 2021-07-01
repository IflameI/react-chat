import React from 'react';

import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { Avatar, StatusReadIcon, useTime } from '../..';
import { IDialogsListItem } from '../../../types/dialogsListItemTypes';

const DialogsListItem: React.FC<IDialogsListItem> = ({
  lastMessage,
  currentDialogsId,
  isMe,
  author,
  _id,
  partner,
}) => {
  const { time } = useTime(lastMessage.updatedAt);
  return (
    <Link to={`/dialog/${_id}`}>
      <div
        className={classNames('main-column-left__item', {
          'main-column-left__item_active': currentDialogsId === _id,
        })}>
        <div>
          <Avatar author={isMe ? partner : author} />
        </div>
        <div className='main-column-left__info'>
          <div className='main-column-left__top'>
            <div className='main-column-left__name'>
              {isMe ? partner.fullname : author.fullname}
            </div>
            <div className='main-column-left__time'>{time}</div>
          </div>
          <div className='main-column-left__bottom'>
            <div className='main-column-left__text'>{lastMessage.text}</div>
            <div className='main-column-left__checked'>
              {<StatusReadIcon isMe={isMe} isRead={lastMessage.read} />}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DialogsListItem;
