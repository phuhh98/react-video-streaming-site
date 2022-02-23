import { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Button } from 'reactstrap';
import { ButtonText, DisplayedUserName } from '../styledComponents/TextStyle';

export default function LoginStatus(props) {
  const loginStatus = JSON.parse(localStorage.getItem('loginStatus'));
  const [redirect, setRedirect] = useState(false);
  const [status, setStatus] = useState(loginStatus.status);
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
  });

  return (
    <>
      {pathname !== '/login' && pathname !== '/signup' && (
        <>
          {<DisplayedUserName>{loginStatus.currentUser}</DisplayedUserName>}
          <Button color="info" outline onClick={loginButtonHandler}>
            <ButtonText>{status === true ? 'Log out' : 'Log in'}</ButtonText>
            {redirect && <Navigate to="/login" />}
          </Button>
        </>
      )}
    </>
  );
}
