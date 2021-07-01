import React from 'react';
import classNames from 'classnames';

import { generateAvatarFromHash } from '..';
import { userData } from '../../types/itemsDataTypes';

interface IAvatar {
  author: userData;
}

const Avatar: React.FC<IAvatar> = ({ author }) => {
  if (author.avatar) {
    return (
      <div
        className={classNames('main-column-left__avatar avatar', {
          'avatar-online': author.isOnline,
        })}>
        <img src={author.avatar} alt='avatar' />
      </div>
    );
  } else {
    const { color, colorLighten } = generateAvatarFromHash(author._id);
    const authorFirstCharName = author.fullname[0];
    return (
      <div
        style={{ background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%)` }}
        className={classNames('avatar-char', {
          'avatar-online': author.isOnline,
        })}>
        {authorFirstCharName}
      </div>
    );
  }
};

export default Avatar;
