import React from 'react';
import { useTypedSelector } from '../../../redux/typeHooks/useTypedSelector';
import { MessagesItem, MessagesInputPanel } from '../..';

interface IMessagesItems {
  items: any[];
  currentDialogsId: string;
  error: boolean;
}

const MessagesItems: React.FC<IMessagesItems> = ({ items, currentDialogsId, error }) => {
  const { data } = useTypedSelector((state) => state.user);
  if (error) {
    return (
      <div className='main-content__void-messages'>
        <div className='main-content__text'>Произошла ошибка</div>
      </div>
    );
  }

  if (!currentDialogsId) {
    return (
      <div className='main-content__void-messages'>
        <div className='main-content__text'>Пожалуйста откройте диалог</div>
      </div>
    );
  }
  return (
    <>
      {data &&
        items.map((item: any, index: number) => (
          <MessagesItem
            isMe={data._id === item.dialog.author}
            user={item.user}
            key={`${item.user._id}_${index}`}
            {...item}
          />
        ))}
      <MessagesInputPanel />
    </>
  );
};

export default MessagesItems;
