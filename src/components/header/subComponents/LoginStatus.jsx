import { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Button } from 'reactstrap';
import { loadLoginStatus } from '../../commons/helperFuncs/helperFuncs';
import {
  ButtonText,
  DisplayedUserName,
} from './styledComponents/LoginStatusStyles';

export default function LoginStatus() {
  const loginStatus = loadLoginStatus();
  const [redirect, setRedirect] = useState(false);
  const [status, setStatus] = useState(!!loginStatus.status);
  const { pathname } = useLocation();

  function loginButtonHandler() {
    if (status === true) {
      localStorage.setItem(
        'loginStatus',
        JSON.stringify({ status: false, currentUser: 'Guest' })
      );
      setStatus(false);
    }
    if (status === false) {
      setRedirect(true);
      setStatus(true);
    }
  }
  useEffect(() => {
    if (redirect) {
      setRedirect(false);
    }
  }, [redirect]);

  return (
    <>
      {pathname !== '/login' && pathname !== '/signup' && (
        <>
          {
            <DisplayedUserName>
              {!!loginStatus.currentUser ? loginStatus.currentUser : 'Guest'}
            </DisplayedUserName>
          }
          <Button color="info" outline onClick={loginButtonHandler}>
            <ButtonText>{status === true ? 'Log out' : 'Log in'}</ButtonText>
            {redirect && <Navigate to="/login" />}
          </Button>
        </>
      )}
    </>
  );
}
