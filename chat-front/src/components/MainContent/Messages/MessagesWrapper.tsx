import React, { useEffect, useRef } from 'react';

import { useActions } from '../../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../../redux/typeHooks/useTypedSelector';
import { MessagesItems, Loader } from '../..';
import socket from '../../../socket/socket';

interface Idata {
  dialog: {
    _id: string;
  };
}

const MessagesWrapper: React.FC = () => {
  const { fetchMessages, addMessage } = useActions();

  const { items, loading, error } = useTypedSelector((state) => state.messages);
  const { currentDialogsId } = useTypedSelector((state) => state.dialogs);

  const dialogsRef = useRef<HTMLHeadingElement>(null);

  const onNewMessage = (data: Idata) => {
    if (currentDialogsId === data.dialog._id) {
      addMessage(data);
    }
  };
``
  useEffect(() => {
    if (currentDialogsId) {
      fetchMessages(currentDialogsId);
    }
    socket.on('SERVER:NEW_MESSAGE', onNewMessage);

    return () => {
      socket.removeListener('SERVER:NEW_MESSAGE', onNewMessage);
    };
  }, [currentDialogsId]);

  useEffect(() => {
    if (dialogsRef.current) {
      dialogsRef.current.scrollTo(0, dialogsRef.current.scrollHeight);
    }
  });

  return (
    <div className='main-content__column main-content__column_right'>
      <div ref={dialogsRef} className='main-content__wrapper'>
        <div className='main-content__dialogs dialogs-content'>
          <div className='dialogs-content__messages-wrapper'>
            {loading ? (
              <Loader />
            ) : (
              <MessagesItems currentDialogsId={currentDialogsId} items={items} error={error} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesWrapper;
