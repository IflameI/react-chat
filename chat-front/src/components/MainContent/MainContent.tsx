import React from 'react';

import { Header, DialogsListWrapper, MessagesWrapper } from '..';
const MainContent: React.FC = () => {
  return (
    <>
      <Header />
      <div className='main-content'>
        <div className='container'>
          <div className='main-content__row'>
            <DialogsListWrapper />
            <MessagesWrapper />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
