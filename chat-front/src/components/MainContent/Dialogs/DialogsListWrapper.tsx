import React from 'react';
import { useActions } from '../../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../../redux/typeHooks/useTypedSelector';

import { DialogsList } from '../..';

const DialogsListWrapper: React.FC = () => {
  const { items, loading, error, currentDialogsId } = useTypedSelector((state) => state.dialogs);

  const { fetchDialogs } = useActions();

  return (
    <div className='main-content__column main-content__column_left main-column-left'>
      <div className='main-column-left__wrapper'>
        <div className='main-column-left__body'>
          <DialogsList
            currentDialogsId={currentDialogsId}
            loading={loading}
            error={error}
            items={items}
            fetchDialogs={fetchDialogs}
          />
        </div>
      </div>
    </div>
  );
};

export default DialogsListWrapper;
