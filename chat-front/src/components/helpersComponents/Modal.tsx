import React, { useState } from 'react';
import classNames from 'classnames';
import axios from 'axios';
import { Loader } from '../';
import { Dispatcher } from '../../types/globalTypes/setActionType';

interface IModal {
  modalActive: boolean;
  setModalActive: Dispatcher<boolean>;
  setMessageText: Dispatcher<string>;
  messageText: string;
}

const Modal: React.FC<IModal> = ({ modalActive, setModalActive, setMessageText, messageText }) => {
  const [valueSearch, setValueSearch] = useState<string>('');
  const [users, setUsers] = useState<any>([]);
  const [isModalLoading, setIsModalLoading] = useState<boolean>(false);

  const onChangeSearch = async (event: any) => {
    setValueSearch(event.target.value);
    const result = await axios.get('http://localhost:3000/user/find?query=' + valueSearch);
    setUsers(result.data);
  };

  const onChangeTextArea = (event: any) => {
    setMessageText(event.target.value);
  };

  const onAddDialog = async () => {
    setIsModalLoading(true);
    try {
      const result = await axios.post('http://localhost:3000/dialogs', {
        partner: users[0].id,
        text: messageText,
      });
      setIsModalLoading(false);
      setUsers(result.data);
      setModalActive(false);
      setValueSearch('');
      setMessageText('');
    } catch (e) {}
  };
  return (
    <div
      className={classNames('modal', {
        active: modalActive,
      })}
      onClick={() => setModalActive(false)}>
      <div
        className={classNames('modal__content', {
          active: modalActive,
        })}
        onClick={(e) => e.stopPropagation()}>
        <div className='modal__wrapper'>
          <div className='modal__info info-modal'>
            <div className='info-modal__text'>Создать диалог</div>
            <div onClick={() => setModalActive(false)} className='info-modal__close'>
              X
            </div>
          </div>
          <div className='modal__top'>
            <div className='main-column-left__input'>
              <label className='modal__label'>Email или имя:</label>
              <input
                onChange={onChangeSearch}
                value={valueSearch}
                placeholder='Введите email пользователя или имя'></input>
            </div>
          </div>
          <div className='modal__middle'>
            <label className='modal__label'>Сообщение:</label>
            <textarea
              placeholder='Введите текст сообщения'
              onChange={onChangeTextArea}
              value={messageText}></textarea>
          </div>
          <div className='modal__bottom'>
            <div className='auth__button'>
              <button disabled={!messageText} onClick={onAddDialog}>
                Создать диалог
              </button>
            </div>
          </div>
          <div className=''>{isModalLoading && <Loader />}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
