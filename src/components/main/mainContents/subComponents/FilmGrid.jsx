import React, { useContext, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Container } from 'reactstrap';

import AppContext from '../../../commons/contexts/AppContext';
import FilmList from '../../../filmList/FilmList';
import GenreDropDown from '../../../genreDropDown/GenreDropDown';
import PrevNextButton from '../../../prevNextButtons/PrevNextButtons';

import { useFetchFilmData } from '../../../commons/customHooks/useFetchData';
import {
  FavLikeButton,
  FilmMenuContainer,
  MainContent,
  PrevNextButtonContainer,
} from '../styledComponents/ContainerStyled';

export default function FilmGrid(props) {
  const { filmData, setFilmData, genreList } = useContext(AppContext);
  const [pageData, setPageData] = useState([]);
  const pathname = useLocation().pathname;
  const params = useParams();
  const [pageNumber, setPageNumber] = useState(
    Number.isInteger(parseInt(params.pageNumber))
      ? parseInt(params.pageNumber)
      : 0
  );

  //Fetch data to filmData
  useFetchFilmData(
    filmData,
    setFilmData,
    // pageData,
    setPageData,
    pageNumber,
    setPageNumber,
    pathname,
    params,
    props.genreFilter
  );

  return (
    <>
      <MainContent>
        <FilmMenuContainer>
          <Container title="menu-left group">
            <GenreDropDown genreList={genreList}></GenreDropDown>
            <FavLikeButton to="/liked">Liked</FavLikeButton>
            <FavLikeButton to="/favorite">Favorite</FavLikeButton>
          </Container>

          <PrevNextButtonContainer>
            <PrevNextButton
              setPageNumber={setPageNumber}
              pageNumber={pageNumber}
            ></PrevNextButton>
          </PrevNextButtonContainer>
        </FilmMenuContainer>

        <FilmList filmList={pageData} />
      </MainContent>
    </>
  );
}
