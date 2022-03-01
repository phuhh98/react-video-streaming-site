import React from "react";

import { Row, Col } from "reactstrap";

import FilmCard from "../filmCard/FilmCard";

export default function FilmList(props) {
  return (
    <Row lg="4" md="3" sm="2" xs="1">
      {props.filmList.map(film => {
        const filmData = {
          imgSrc: !!film.image
            ? !!film.image.medium
              ? film.image.medium
              : film.image.original
            : "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png",
          imgAlt: film.name,
          genres: film.genres,
          filmTitle: film.name,
          rating: !!film.rating.average ? film.rating.average : "N/A",
          id: film.id,
          href: film._links.self.href,
        };
        return (
          <Col className="bg-light" key={film.id}>
            <FilmCard film={filmData} />
          </Col>
        );
      })}
    </Row>
  );
}
