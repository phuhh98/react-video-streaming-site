import React, { useState, useEffect } from 'react';

import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { CursorHover, ImageContainer } from '../../utilWrapper/UtilWrapper';
import {
  loadLoginStatus,
  loadUsersList,
  updateUserList,
} from '../../commons/helperFuncs/helperFuncs';
import { useParams } from 'react-router-dom';
import {
  Casts,
  Description,
  FilmImage,
  ShowDescriptionContainer,
  Detail,
  FavLikeGroup,
  CastList,
  Rating,
} from './styledComponents/ContainerStyled';
import CastCard from './subComponents/CastCard';

import { noPosterImageURL } from '../../../constant/values';
import { NA } from '../../../constant/strings';

export default function Show() {
  let [favorite, setFavorite] = useState(false);
  let [liked, setliked] = useState(false);
  let [film, setFilm] = useState(null);
  let [imgSrc, setImgSrc] = useState(noPosterImageURL);
  let { id } = useParams();
  //parse id to number to avoid conflict of data saved in localStorage
  id = parseInt(id);

  // Load film according to film id from params
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}?embed=cast`)
      .then(response => response.json())
      .then(data => {
        setFilm(data);
        if (!!data.image) {
          if (!!data.image.original) {
            setImgSrc(data.image.original);
          } else if (!!data.image.medium) {
            setImgSrc(data.image.medium);
          }
        }
      });
  }, [id]);

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
    if (!!liked && liked.some(item => item.id === id)) {
      setliked(true);
    }
    if (!!favorite && favorite.some(item => item.id === id)) {
      setFavorite(true);
    }
  }, [id]);

  // Onclick favorite button
  function onClickFavorite() {
    const userList = loadUsersList();
    const currentUsername = loadLoginStatus().currentUser;
    const currentUser = userList.find(
      ({ username }) => username === currentUsername
    );
    if (!currentUser) {
      alert('Login to save to your Favorites');
      return;
    }
    currentUser.favorite = !!currentUser.favorite ? currentUser.favorite : [];
    if (!favorite) {
      if (!currentUser.favorite.some(item => item.id === id)) {
        currentUser.favorite.push({
          id,
          href: film._links.self.href,
        });
      }
    } else {
      const itemIndex = currentUser.favorite.findIndex(item => item.id === id);
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
      alert('Login to save to your Liked');
      return;
    }
    currentUser.liked = !!currentUser.liked ? currentUser.liked : [];

    if (!liked) {
      if (!currentUser.liked.some(item => item.id === id)) {
        currentUser.liked.push({
          id,
          href: film._links.self.href,
        });
      }
    } else {
      const itemIndex = currentUser.liked.findIndex(item => item.id === id);
      currentUser.liked.splice(itemIndex, 1);
    }

    setliked(!liked);
    updateUserList(userList);
  }

  return (
    <>
      {!!film && (
        <Container>
          <ShowDescriptionContainer>
            <FilmImage>
              <ImageContainer src={imgSrc}></ImageContainer>
              <FavLikeGroup>
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
              </FavLikeGroup>
            </FilmImage>
            <Description>
              <h1>{film.name}</h1>
              <h4>Genres: {film.genres.join(' • ')}</h4>
              <h4>Country: {film.network.country.name}</h4>
              <h4>Status: {film.status}</h4>
              <div>
                <Rating>
                  <span>
                    Rate: {!!film.rating.average ? film.rating.average : NA}
                    &nbsp;
                  </span>
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                </Rating>
              </div>

              <h4>Description</h4>
              <Detail
                dangerouslySetInnerHTML={{ __html: film.summary }}
              ></Detail>
            </Description>

            <Casts>
              <h3>Casts</h3>
              <CastList>
                {film._embedded.cast.map(cast => {
                  let image = noPosterImageURL;
                  if (!!cast.person.image) {
                    if (!!cast.person.image.medium) {
                      image = cast.person.image.medium;
                    } else {
                      image = cast.person.image.original;
                    }
                  }
                  return (
                    <CastCard
                      key={cast.character.name}
                      cast={{
                        image,
                        name: cast.person.name,
                        role: cast.character.name,
                      }}
                    />
                  );
                })}
              </CastList>
            </Casts>
          </ShowDescriptionContainer>
        </Container>
      )}
    </>
  );
}
