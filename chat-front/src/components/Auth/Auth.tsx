import React from 'react';
import { Route } from 'react-router';
import { CheckEmailInfo, WrapperRegister, WrapperAuth } from '..';
import { History } from 'history';

interface IAuth {
  fetchUserLogin: any;
  fetchUserRegister: any;
  history: History;
}

const Auth: React.FC<IAuth> = ({ fetchUserLogin, fetchUserRegister, history }) => {
  return (
    <>
      <Route exact path='/signin'>
        <WrapperAuth fetchUserLogin={fetchUserLogin} history={history} />
      </Route>
      <Route exact path='/signup'>
        <WrapperRegister fetchUserRegister={fetchUserRegister} history={history} />
      </Route>
      <Route exact path='/signup/verify'>
        <CheckEmailInfo history={history} />
      </Route>
    </>
  );
};

export default Auth;
