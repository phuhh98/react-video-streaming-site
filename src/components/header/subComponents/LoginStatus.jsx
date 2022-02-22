import { Button } from 'reactstrap';
import { ButtonText } from '../styledComponents/TextStyle';

export default function LoginStatus(props) {
  const loginStatus = localStorage.getItem('loginStatus');

  return (
    <>
      <Button color="info" outline>
        <ButtonText>{loginStatus ? 'Log out' : 'Log in'}</ButtonText>
      </Button>
    </>
  );
}
