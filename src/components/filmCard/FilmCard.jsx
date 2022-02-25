import React, { useState, useEffect } from "react";

import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  Button,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { CursorHover } from "../utilWrapper/UtilWrapper";
import {
  loadLoginStatus,
  loadUsersList,
  updateUserList,
} from "../commons/helperFuncs/helperFuncs";

export default function FilmCard(props) {
  let [favorite, setFavorite] = useState(false);
  let [liked, setliked] = useState(false);
  const { data } = props;

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
    if (!!liked && liked.some(item => item.id === data.id)) {
      setliked(true);
    }
    if (!!favorite && favorite.some(item => item.id === data.id)) {
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
      if (currentUser.favorite.some(item => item.id === data.id)) {
      } else {
        currentUser.favorite.push({
          id: data.id,
          href: data.href,
        });
      }
    } else {
      const itemIndex = currentUser.favorite.findIndex(
        item => item.id === data.id
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
      alert("Login to save to your Liked");
      return;
    }
    currentUser.liked = !!currentUser.liked ? currentUser.liked : [];

    if (!liked) {
      if (currentUser.liked.some(item => item.id === data.id)) {
      } else {
        currentUser.liked.push({
          id: data.id,
          href: data.href,
        });
      }
    } else {
      const itemIndex = currentUser.liked.findIndex(
        item => item.id === data.id
      );
      currentUser.liked.splice(itemIndex, 1);
    }

    setliked(!liked);
    updateUserList(userList);
  }

  return (
    <>
      <Card style={{ marginBottom: "20px", height: "550px" }}>
        <CardImg alt={data.imgAlt} src={data.imgSrc} top height="400px" />
        <CardBody style={{ position: "relative" }}>
          <CardTitle tag="h5">{data.filmTitle}</CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
            }}
          >
            {data.genres.join(" • ")}
          </CardSubtitle>
          <Container
            style={{
              padding: "0",
              width: "87%",
              display: "flex",
              justifyContent: "space-between",
              position: "absolute",
              bottom: "0.7rem",
            }}
          >
            <Button disabled style={{ padding: "5px 10px" }}>
              Rate: {data.rating}&nbsp;
              <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />
            </Button>
            <div
              style={{
                width: "30%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <CursorHover>
                <FontAwesomeIcon
                  icon={faHeart}
                  className="fa-xl"
                  style={favorite ? { color: "red" } : { color: "gray" }}
                  onClick={onClickFavorite}
                  id={`fav-${data.id}`}
                  title="favorite button"
                />
              </CursorHover>

              <CursorHover>
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  className="fa-xl"
                  style={liked ? { color: "turquoise" } : { color: "gray" }}
                  onClick={onClickLiked}
                  id={`liked-${data.id}`}
                  title="liked button"
                />
              </CursorHover>
            </div>
          </Container>
        </CardBody>
      </Card>
    </>
  );
}
