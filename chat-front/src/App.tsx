import React, { useEffect } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router';
import { useHistory } from 'react-router-dom';

import { useActions } from './redux/typeHooks/useActions';
import { useTypedSelector } from './redux/typeHooks/useTypedSelector';
import { MainContent, Auth } from './components';

const App: React.FC = () => {
  const { isAuth } = useTypedSelector((state) => state.user);
  const { fetchUserLogin, fetchUserRegister, fetchUserData, setCurrentDialog } = useActions();

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    const dialogId = location.pathname.split('/').pop();
    if (location.pathname !== '/signin') {
      setCurrentDialog(dialogId);
    }
  }, [location.pathname]);

  return (
    <>
      <Switch>
        <Route exact path={['/signin', '/signup', '/signup/verify']}>
          <Auth
            fetchUserLogin={fetchUserLogin}
            fetchUserRegister={fetchUserRegister}
            history={history}
          />
        </Route>
        <Route path='/' render={() => (isAuth ? <MainContent /> : <Redirect to='/signin' />)} />
      </Switch>
    </>
  );
};

export default App;
