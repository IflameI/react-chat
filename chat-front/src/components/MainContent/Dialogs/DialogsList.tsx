import React, { useState, useEffect } from 'react';
import { orderBy } from 'lodash';

import { itemsData } from '../../../types/itemsDataTypes';
import { DialogsListItem, Modal, Loader } from '../..';
import socket from '../../../socket/socket';
import { useTypedSelector } from '../../../redux/typeHooks/useTypedSelector';

interface IDialogsList {
  items: itemsData[];
  loading: boolean;
  error: string;
  currentDialogsId: string;
  fetchDialogs: () => void;
}

const DialogsList: React.FC<IDialogsList> = ({
  items,
  loading,
  currentDialogsId,
  error,
  fetchDialogs,
}) => {
  const { data } = useTypedSelector((state) => state.user);

  const [inputValue, setInputValue] = useState('');
  const [filtredItems, setFiltredItems] = useState(Array.from(items));
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [messageText, setMessageText] = useState<string>('');

  const onChangeInput = (value = '') => {
    setFiltredItems(
      items.filter(
        (dialog: any) =>
          dialog.author.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0 ||
          dialog.partner.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0,
      ),
    );
    setInputValue(value);
  };

  (window as any).fetchDialogs = fetchDialogs;

  useEffect(() => {
    if (items.length) {
      onChangeInput();
    }
  }, [items]);

  useEffect(() => {
    fetchDialogs();
    socket.on('SERVER:DIALOG_CREATED', fetchDialogs);
    socket.on('SERVER:NEW_MESSAGE', fetchDialogs);

    return () => {
      socket.removeListener('SERVER:DIALOG_CREATED', fetchDialogs);
      socket.removeListener('SERVER:NEW_MESSAGE', fetchDialogs);
    };
  }, []);

  if (loading) {
    return <Loader />;
  } else if (error) {
    return <div style={{ textAlign: 'center' }}>{error}</div>;
  }
  return (
    <>
      <div className='main-column-left__header'>
        <div className='main-column-left__top top-main-column'>
          <div className='top-main-column__text'>Список диалогов</div>
          <div className='top-main-column__icon'>
            <button onClick={() => setModalActive(true)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='100%'
                height='100%'
                viewBox='0 0 24 24'>
                <path d='M10 13h-4v-1h4v1zm2.318-4.288l3.301 3.299-4.369.989 1.068-4.288zm11.682-5.062l-7.268 7.353-3.401-3.402 7.267-7.352 3.402 3.401zm-6 8.916v.977c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362v-20h14.056l1.977-2h-18.033v24h10.189c3.163 0 9.811-7.223 9.811-9.614v-3.843l-2 2.023z' />
              </svg>
            </button>
          </div>
        </div>
        <div className='main-column-left__input'>
          <input
            value={inputValue}
            onChange={(e) => onChangeInput(e.target.value)}
            placeholder='Поиск'></input>
        </div>
      </div>
      <Modal
        modalActive={modalActive}
        setModalActive={setModalActive}
        setMessageText={setMessageText}
        messageText={messageText}
      />
      {filtredItems.length ? (
        orderBy(filtredItems, ['created_at'], ['desc']).map((filtredItems: any) => (
          <DialogsListItem
            currentDialogsId={currentDialogsId}
            key={filtredItems._id}
            isMe={data && data._id === filtredItems.author.id}
            {...filtredItems}
          />
        ))
      ) : (
        <div className='main-column-left__unknown'>Пользователь не найден</div>
      )}
    </>
  );
};

export default DialogsList;
