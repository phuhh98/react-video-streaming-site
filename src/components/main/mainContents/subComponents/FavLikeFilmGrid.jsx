import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "reactstrap";

import AppContext from "../../../commons/contexts/AppContext";
import FilmList from "../../../filmList/FilmList";
import GenreDropDown from "../../../genreDropDown/GenreDropDown";

import {
  FavLikeButton,
  FilmMenuContainer,
  MainContent,
} from "../styledComponents/ContainerStyled";

import {
  loadUsersList,
  loadLoginStatus,
} from "../../../commons/helperFuncs/helperFuncs";

export default function FilmGrid(props) {
  const { genreList } = useContext(AppContext);
  const [pageData, setPageData] = useState([]);
  const pathname = useLocation().pathname;

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
      !!currentUser.favorite &&
        currentUser.favorite.forEach(item => temp.push(item.href));
    }
    if (pathname === "/liked") {
      !!currentUser.liked &&
        currentUser.liked.forEach(item => temp.push(item.href));
    }
    if (temp.length === 0) {
      return;
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

          {/* <PrevNextButtonContainer>
            <PrevNextButton
              setPageNumber={setPageNumber}
              pageNumber={pageNumber}
            ></PrevNextButton>
          </PrevNextButtonContainer> */}
        </FilmMenuContainer>

        {pageData.length > 0 && (
          <>
            <h2>
              {pathname === "/liked" ? "Liked movies" : "Favorite movies"}
            </h2>
            <FilmList filmList={pageData} />
          </>
        )}
        {pageData.length <= 0 && (
          <>
            <h2>
              {pathname === "/liked" ? "Liked movies" : "Favorite movies"}
            </h2>
            <section>
              <br />
              <h3>There is nothing here yet</h3>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </section>
          </>
        )}
      </MainContent>
    </>
  );
}
