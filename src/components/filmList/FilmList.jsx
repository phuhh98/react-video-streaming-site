import React from 'react';

import { Row, Col } from 'reactstrap';

import FilmCard from '../filmCard/FilmCard';
import { noPosterImageURL } from '../../constant/values';

export default function FilmList({ filmList }) {
  return (
    <Row lg="4" md="3" sm="2" xs="1">
      {filmList.map(film => {
        let imgSrc = '';
        if (!!film.image) {
          if (!!film.image.medium) {
            imgSrc = film.image.medium;
          } else {
            imgSrc = film.image.original;
          }
        } else {
          imgSrc = noPosterImageURL;
        }

        const filmData = {
          imgSrc,
          imgAlt: film.name,
          genres: film.genres,
          filmTitle: film.name,
          rating: !!film.rating.average ? film.rating.average : 'N/A',
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
