import React from 'react';

import { DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { NoUnderLinedLink } from '../utilWrapper/UtilWrapper';
import { firstLetterUpperCase } from '../commons/helperFuncs/helperFuncs';
import { useParams } from 'react-router-dom';
import { UncontrolledDropdownStyled } from './styledComponents/GenreDropDownStyles';

export default function GenreDropDown({ genreList }) {
  const params = useParams();
  const currentGenreTitle = params.genre ? params.genre : 'genre';
  return (
    <UncontrolledDropdownStyled>
      <DropdownToggle caret color="secondary">
        {firstLetterUpperCase(currentGenreTitle)}
      </DropdownToggle>
      <DropdownMenu container="body">
        {genreList.map(genre => (
          <NoUnderLinedLink to={`/genre/${genre}`} key={genre}>
            <DropdownItem>{firstLetterUpperCase(genre)}</DropdownItem>
          </NoUnderLinedLink>
        ))}
      </DropdownMenu>
    </UncontrolledDropdownStyled>
  );
}
