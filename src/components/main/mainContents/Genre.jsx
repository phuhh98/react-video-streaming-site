import React, { useContext, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Container, Button } from 'reactstrap';

import AppContext from '../../commons/contexts/AppContext';
import FilmList from '../../filmList/FilmList';
import GenreDropDown from '../../genreDropDown/GenreDropDown';
import { NoUnderLinedLink } from '../../utilWrapper/UtilWrapper';
import PrevNextButton from '../../prevNextButtons/PrevNextButtons';

import { genreFilter } from '../../commons/helperFuncs/helperFuncs';
import { useFetchFilmData } from '../../commons/customHooks/useFetchData';

export default React.memo(function HomePage() {
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
    pageData,
    setPageData,
    pageNumber,
    setPageNumber,
    pathname,
    params,
    genreFilter
  );

  return (
    <>
      <Container
        style={{
          marginTop: '20px',
        }}
      >
        <Container
          style={{
            margin: '10px auto',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Container title="menu-left group">
            <GenreDropDown genreList={genreList}></GenreDropDown>
            <Button color="danger" style={{ marginLeft: '10px' }}>
              <NoUnderLinedLink to="/liked" style={{ color: 'white' }}>
                Liked
              </NoUnderLinedLink>
            </Button>
            <Button color="danger" style={{ marginLeft: '10px' }}>
              <NoUnderLinedLink to="/favorite" style={{ color: 'white' }}>
                Favorite
              </NoUnderLinedLink>
            </Button>
          </Container>
          <Container
            title="menu-right group"
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <PrevNextButton
              setPageNumber={setPageNumber}
              pageNumber={pageNumber}
              path=""
            ></PrevNextButton>
          </Container>
        </Container>

        <FilmList filmList={pageData} />
      </Container>
    </>
  );
});
