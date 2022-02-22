import styled from 'styled-components';

import { Container, Button } from 'reactstrap';
import { NoUnderLinedLink } from '../../../utilWrapper/UtilWrapper';

export const MainContent = styled(Container)`
  margin-top: 20px;
`;

export const FilmMenuContainer = styled(Container)`
  margin: 10px auto 20px;
  display: flex;
  justify-content: space-between;
`;

export const PrevNextButtonContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
`;

const FLButton = styled.span`
  margin-left: 10px;
  color: white;
`;
export const FavLikeButton = props => (
  <FLButton>
    <Button color="danger">
      <NoUnderLinedLink to={props.to}>{props.children}</NoUnderLinedLink>
    </Button>
  </FLButton>
);

export const LoginContainer = styled(MainContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

export const FormContainer = styled.div`
  box-sizing: border-box;
  height: 600px;
  background-color: blue;
  padding: 10vh 0;
  background-color: white;
  box-shadow: 0 0 15px 3px #a0a0a0;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 30vw;
  height: 200px;
  padding: 0 5vw;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0 30px;

  background-color: #e9e9e9;
  border: none;
  border-radius: 0.2rem;
  &:focus {
    border: 1px solid gray;
    outline: none;
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  height: 3rem;
  border: none;
  border-radius: 0.2rem;
  background-color: #4caf4f;
  color: white;
  &:hover {
    background-color: #1bbc9b;
  }
`;

export const AdditionalText = styled.p`
  text-align: center;
  font-weight: 500;
  color: gray;
`;

export const ErrorPrompt = styled.p`
  text-align: center;
  color: red;
  font-weight: 400;
`;
