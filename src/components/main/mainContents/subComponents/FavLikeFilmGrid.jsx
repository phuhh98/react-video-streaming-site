import React, { useContext, useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Container } from "reactstrap";

import AppContext from "../../../commons/contexts/AppContext";
import FilmList from "../../../filmList/FilmList";
import GenreDropDown from "../../../genreDropDown/GenreDropDown";
import PrevNextButton from "../../../prevNextButtons/PrevNextButtons";

import {
  FavLikeButton,
  FilmMenuContainer,
  MainContent,
  PrevNextButtonContainer,
} from "../styledComponents/ContainerStyled";

import {
  loadUsersList,
  loadLoginStatus,
} from "../../../commons/helperFuncs/helperFuncs";

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

  useEffect(() => {
    const userList = loadUsersList();
    const currentUsername = loadLoginStatus().currentUser;
    const currentUser = userList.find(
      user => user.username === currentUsername
    );
    if (!currentUser) {
      return;
    }
    let temp = [];
    if (pathname === "/favorite") {
      currentUser.favorite.forEach(item => temp.push(item.href));
    }
    if (pathname === "/liked") {
      currentUser.liked.forEach(item => temp.push(item.href));
    }

    temp.forEach(href => {
      fetch(href)
        .then(res => res.json())
        .then(data => {
          setPageData([...pageData, data]);
        });
    });
    Promise.all(temp.map(href => fetch(href).then(res => res.json()))).then(
      data => {
        setPageData(data);
      }
    );
  }, []);

  useEffect(() => {}, [pageData]);

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
