import React, { useState } from "react";

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

export default function FilmCard(props) {
  let [favorite, setFavorite] = useState(false);
  let [like, setLike] = useState(false);
  const { data } = props;

  console.log(data);
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
                  onClick={() => setFavorite(!favorite)}
                  id={`fav-${data.id}`}
                  title="favorite button"
                />
              </CursorHover>

              <CursorHover>
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  className="fa-xl"
                  style={like ? { color: "turquoise" } : { color: "gray" }}
                  onClick={() => setLike(!like)}
                  id={`like-${data.id}`}
                  title="like button"
                />
              </CursorHover>
            </div>
          </Container>
        </CardBody>
      </Card>
    </>
  );
}
