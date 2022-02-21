import React from 'react';

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import { NoUnderLinedLink } from '../utilWrapper/UtilWrapper';
import { firstLetterUpperCase } from '../commons/helperFuncs/helperFuncs';
import { useParams } from 'react-router-dom';

export default function GenreDropDown(props) {
  const genreList = props.genreList; // an Array
  const params = useParams();
  const currentGenreTitle = params.genre ? params.genre : 'genre';
  return (
    <UncontrolledDropdown style={{ display: 'inline-block' }}>
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
    </UncontrolledDropdown>
  );
}
