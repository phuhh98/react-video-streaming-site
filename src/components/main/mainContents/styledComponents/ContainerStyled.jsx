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
export const SignupContainer = styled(LoginContainer)``;

export const FormContainer = styled.div`
  box-sizing: border-box;
  height: 600px;
  background-color: blue;
  padding: 10vh 0;
  background-color: white;
  box-shadow: 0 0 15px 3px #a0a0a0;
`;

export const SignupFormContainer = styled(FormContainer)`
  height: 700px;
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

export const SignupForm = styled(LoginForm)`
  height: 265px;
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

export const StyledALink = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: green;
  }
`;

export const SocialMediaContacts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  width: 150px;
`;

export const ContactImageLink = styled.div`
  height: 100px;
`;

export const ShowDescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  grid-teplate-rows: auto auto auto;

  margin: 20px auto;
`;
export const FilmImage = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  background-color: #e9e9e9;
`;
export const ImageContainer = styled.img`
  //   width: 100%;
  height: 100%;
`;

export const Description = styled.div`
  grid-column: 2/3;
  grid-row: 1/3;
  margin-left: 30px;
  & > * {
    margin-bottom: 15px;
  }
`;
export const Detail = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
`;
export const Casts = styled.div`
  grid-column: 1/3;
  grid-row: 3/4;
  margin: 30px 0;
`;

export const CastList = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 20px 10px;
`;

export const FavLikeGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 10px auto;
`;

export const CastCardContainer = styled.div`
  width: 300px;
  height: 470px;
  overflow: hidden;
  border-radius: 5px;
  background-color: #d9d9d9;
  & > *:nth-child(2) {
    padding: 8px 15px;
  }
`;

const DisabledButton = props => <Button disabled {...props} />;
export const Rating = styled(DisabledButton)`
  padding: 5px 10px;
  font-size: 1.2rem;
`;
