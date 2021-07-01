import React from 'react';
import { useTypedSelector } from '../redux/typeHooks/useTypedSelector';
import { usePartner } from '.';
const Header: React.FC = () => {
  const { currentDialogsId, items } = useTypedSelector((state) => state.dialogs);
  const { data } = useTypedSelector((state) => state.user);
  const { partner } = usePartner(items, currentDialogsId, data);

  if (!items.length || !currentDialogsId) {
    return (
      <header className='header'>
        <div className='container'>
          <div className='header__row'>
            <div className='header__logo'>react-chat</div>
          </div>
        </div>
      </header>
    );
  }
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__row'>
          <div className='header__logo'>Telegram</div>
          <div className='header__name'>{partner.fullname}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
