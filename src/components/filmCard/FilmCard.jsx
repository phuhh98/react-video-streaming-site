import React, { useState, useEffect } from 'react';

import {
  BottomGroup,
  FilmCardBody,
  FilmCardContainer,
  FilmGenres,
  FilmTitle,
  PosterImage,
  StyledLink,
  Rating,
  ButtonsGroup,
} from './styledComponents/FilmCardStyles';
import { Enlarge } from '../utilWrapper/UtilWrapper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { CursorHover } from '../utilWrapper/UtilWrapper';
import {
  loadLoginStatus,
  loadUsersList,
  updateUserList,
} from '../commons/helperFuncs/helperFuncs';

import { alertLoginFav, alertLoginLike } from '../../constant/strings';

export default function FilmCard({ film }) {
  let [favorite, setFavorite] = useState(false);
  let [liked, setliked] = useState(false);

  // On first render, check the favorite and like button if this film is in liked or favorite array
  useEffect(() => {
    const userList = loadUsersList();
    const currentUsername = loadLoginStatus().currentUser;
    const currentUser = userList.find(
      ({ username }) => username === currentUsername
    );
    if (!currentUser) {
      return;
    }
    const { liked, favorite } = currentUser;
    if (!!liked && liked.some(({ id }) => id === film.id)) {
      setliked(true);
    }
    if (!!favorite && favorite.some(({ id }) => id === film.id)) {
      setFavorite(true);
    }
  }, [film.id]);

  // Onclick favorite button
  function onClickFavorite() {
    const userList = loadUsersList();
    const currentUsername = loadLoginStatus().currentUser;
    const currentUser = userList.find(
      ({ username }) => username === currentUsername
    );
    if (!currentUser) {
      alert(alertLoginFav);
      return;
    }
    currentUser.favorite = !!currentUser.favorite ? currentUser.favorite : [];
    if (!favorite) {
      if (!currentUser.favorite.some(({ id }) => id === film.id)) {
        currentUser.favorite.push({
          id: film.id,
          href: film.href,
        });
      }
    } else {
      const itemIndex = currentUser.favorite.findIndex(
        ({ id }) => id === film.id
      );
      currentUser.favorite.splice(itemIndex, 1);
    }
    setFavorite(!favorite);
    updateUserList(userList);
  }

  function onClickLiked() {
    const userList = loadUsersList();
    const currentUsername = loadLoginStatus().currentUser;
    const currentUser = userList.find(
      user => user.username === currentUsername
    );
    if (!currentUser) {
      alert(alertLoginLike);
      return;
    }
    currentUser.liked = !!currentUser.liked ? currentUser.liked : [];

    if (!liked) {
      if (!currentUser.liked.some(item => item.id === film.id)) {
        currentUser.liked.push({
          id: film.id,
          href: film.href,
        });
      }
    } else {
      const itemIndex = currentUser.liked.findIndex(
        item => item.id === film.id
      );
      currentUser.liked.splice(itemIndex, 1);
    }

    setliked(!liked);
    updateUserList(userList);
  }

  return (
    <>
      <Enlarge>
        <FilmCardContainer>
          <StyledLink to={`/show/${film.id}`}>
            <PosterImage alt={film.imgAlt} src={film.imgSrc} />
          </StyledLink>

          <FilmCardBody>
            <StyledLink to={`/show/${film.id}`}>
              <FilmTitle>{film.filmTitle}</FilmTitle>
            </StyledLink>
            <FilmGenres>{film.genres.join(' • ')}</FilmGenres>
            <BottomGroup>
              <Rating>
                Rate: {film.rating}&nbsp;
                <FontAwesomeIcon icon={faStar} color="yellow" />
              </Rating>
              <ButtonsGroup>
                <CursorHover>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="fa-xl"
                    color={favorite ? 'red' : 'gray'}
                    onClick={onClickFavorite}
                    id={`fav-${film.id}`}
                    title="favorite button"
                  />
                </CursorHover>

                <CursorHover>
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    className="fa-xl"
                    color={liked ? 'turquoise' : 'gray'}
                    onClick={onClickLiked}
                    id={`liked-${film.id}`}
                    title="liked button"
                  />
                </CursorHover>
              </ButtonsGroup>
            </BottomGroup>
          </FilmCardBody>
        </FilmCardContainer>
      </Enlarge>
    </>
  );
}
