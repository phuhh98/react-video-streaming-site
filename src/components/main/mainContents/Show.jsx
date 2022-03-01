import React, { useState, useEffect } from "react";

import { Container, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { CursorHover, ImageContainer } from "../../utilWrapper/UtilWrapper";
import {
  loadLoginStatus,
  loadUsersList,
  updateUserList,
} from "../../commons/helperFuncs/helperFuncs";
import { useParams } from "react-router-dom";
import {
  Casts,
  Description,
  FilmImage,
  ShowDescriptionContainer,
  Detail,
  FavLikeGroup,
  CastList,
} from "./styledComponents/ContainerStyled";
import CastCard from "./subComponents/CastCard";

export default function Show() {
  let [favorite, setFavorite] = useState(false);
  let [liked, setliked] = useState(false);
  let [film, setFilm] = useState(null);
  let { id } = useParams();
  //parse id to number to avoid conflict of data saved in localStorage
  id = parseInt(id);

  // Load film according to film id from params
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}?embed=cast`)
      .then(response => response.json())
      .then(data => {
        setFilm(data);
      });
  }, []);

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
    if (!!liked && liked.some(item => item.id === id)) {
      setliked(true);
    }
    if (!!favorite && favorite.some(item => item.id === id)) {
      setFavorite(true);
    }
  }, []);

  // Onclick favorite button
  function onClickFavorite(e) {
    console.log(favorite);
    const userList = loadUsersList();
    const currentUsername = loadLoginStatus().currentUser;
    const currentUser = userList.find(
      user => user.username === currentUsername
    );
    if (!currentUser) {
      alert("Login to save to your Favorites");
      return;
    }
    currentUser.favorite = !!currentUser.favorite ? currentUser.favorite : [];
    if (!favorite) {
      if (currentUser.favorite.some(item => item.id === id)) {
      } else {
        currentUser.favorite.push({
          id: id,
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

  function onClickLiked(e) {
    const userList = loadUsersList();
    const currentUsername = loadLoginStatus().currentUser;
    const currentUser = userList.find(
      user => user.username === currentUsername
    );
    if (!currentUser) {
      alert("Login to save to your Liked");
      return;
    }
    currentUser.liked = !!currentUser.liked ? currentUser.liked : [];

    if (!liked) {
      if (currentUser.liked.some(item => item.id === id)) {
      } else {
        currentUser.liked.push({
          id: id,
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
              <ImageContainer
                src={
                  !!film.image
                    ? !!film.image.original
                      ? film.image.original
                      : film.image.medium
                    : "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png"
                }
              ></ImageContainer>
              <FavLikeGroup>
                <CursorHover>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="fa-xl"
                    style={favorite ? { color: "red" } : { color: "gray" }}
                    onClick={onClickFavorite}
                    id={`fav-${film.id}`}
                    title="favorite button"
                  />
                </CursorHover>

                <CursorHover>
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    className="fa-xl"
                    style={liked ? { color: "turquoise" } : { color: "gray" }}
                    onClick={onClickLiked}
                    id={`liked-${film.id}`}
                    title="liked button"
                  />
                </CursorHover>
              </FavLikeGroup>
            </FilmImage>
            <Description>
              <h1>{film.name}</h1>
              <h4>Genres: {film.genres.join(" • ")}</h4>
              <h4>Country: {film.network.country.name}</h4>
              <h4>Status: {film.status}</h4>
              <div>
                <Button
                  disabled
                  style={{ padding: "5px 10px", fontSize: "1.2rem" }}
                >
                  <span>
                    Rate: {!!film.rating.average ? film.rating.average : "N/A"}
                    &nbsp;
                  </span>
                  <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />
                </Button>
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
                  return (
                    <CastCard
                      key={cast.character.name}
                      cast={{
                        image: !!cast.person.image
                          ? !!cast.person.image.medium
                            ? cast.person.image.medium
                            : cast.person.image.original
                          : "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png",
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
