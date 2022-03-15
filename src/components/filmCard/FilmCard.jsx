import React, { useState, useEffect } from 'react';

import { Enlarge, StyledLink } from './styledComponent/styledContainer';

import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  Button,
} from 'reactstrap';
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
      user => user.username === currentUsername
    );
    if (!currentUser) {
      return;
    }
    const { liked, favorite } = currentUser;
    if (!!liked && liked.some(item => item.id === film.id)) {
      setliked(true);
    }
    if (!!favorite && favorite.some(item => item.id === film.id)) {
      setFavorite(true);
    }
  }, [film.id]);

  // Onclick favorite button
  function onClickFavorite(e) {
    console.log(favorite);
    const userList = loadUsersList();
    const currentUsername = loadLoginStatus().currentUser;
    const currentUser = userList.find(
      user => user.username === currentUsername
    );
    if (!currentUser) {
      alert(alertLoginFav);
      return;
    }
    currentUser.favorite = !!currentUser.favorite ? currentUser.favorite : [];
    if (!favorite) {
      if (currentUser.favorite.some(item => item.id === film.id)) {
      } else {
        currentUser.favorite.push({
          id: film.id,
          href: film.href,
        });
      }
    } else {
      const itemIndex = currentUser.favorite.findIndex(
        item => item.id === film.id
      );
      currentUser.favorite.splice(itemIndex, 1);
    }
    setFavorite(!favorite);
    updateUserList(userList);
  }

  function onClickLiked(e) {
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
      if (currentUser.liked.some(item => item.id === film.id)) {
      } else {
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
        <Card style={{ marginBottom: '20px', height: '550px' }}>
          <StyledLink to={`/show/${film.id}`}>
            <CardImg alt={film.imgAlt} src={film.imgSrc} top height="400px" />
          </StyledLink>

          <CardBody style={{ position: 'relative' }}>
            <StyledLink to={`/show/${film.id}`}>
              <CardTitle tag="h5">{film.filmTitle}</CardTitle>
            </StyledLink>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
              style={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: '2',
                WebkitBoxOrient: 'vertical',
              }}
            >
              {film.genres.join(' • ')}
            </CardSubtitle>
            <Container
              style={{
                padding: '0',
                width: '87%',
                display: 'flex',
                justifyContent: 'space-between',
                position: 'absolute',
                bottom: '0.7rem',
              }}
            >
              <Button disabled style={{ padding: '5px 10px' }}>
                Rate: {film.rating}&nbsp;
                <FontAwesomeIcon icon={faStar} style={{ color: 'yellow' }} />
              </Button>
              <div
                style={{
                  width: '30%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <CursorHover>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="fa-xl"
                    style={favorite ? { color: 'red' } : { color: 'gray' }}
                    onClick={onClickFavorite}
                    id={`fav-${film.id}`}
                    title="favorite button"
                  />
                </CursorHover>

                <CursorHover>
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    className="fa-xl"
                    style={liked ? { color: 'turquoise' } : { color: 'gray' }}
                    onClick={onClickLiked}
                    id={`liked-${film.id}`}
                    title="liked button"
                  />
                </CursorHover>
              </div>
            </Container>
          </CardBody>
        </Card>
      </Enlarge>
    </>
  );
}
