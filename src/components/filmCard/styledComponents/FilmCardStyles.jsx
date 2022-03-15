import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  Button,
} from 'reactstrap';

export const FilmCardContainer = styled(Card)`
  margin-bottom: 20px;
  height: 550px;
`;

export const PosterImage = props => <CardImg top height="400px" {...props} />;

export const FilmCardBody = styled(CardBody)`
  position: relative;
`;

export const FilmTitle = props => <CardTitle tag="h5" {...props} />;

const StyledSubtitle = props => (
  <CardSubtitle className="mb-2 text-muted" tag="h6" {...props} />
);
export const FilmGenres = styled(StyledSubtitle)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const BottomGroup = styled(Container)`
  padding: 0;
  width: 87%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0.7rem;
`;

const DisabledButton = props => <Button disabled {...props} />;
export const Rating = styled(DisabledButton)`
  padding: 5px 10px;
`;

export const ButtonsGroup = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
