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
