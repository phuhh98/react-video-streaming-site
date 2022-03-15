import React from 'react';

import FilmCard from '../filmCard/FilmCard';
import { Grid, GridItem } from './styledComponents/FilmListStyles';

import { noPosterImageURL } from '../../constant/values';
import { NA } from '../../constant/strings';

export default function FilmList({ filmList }) {
  return (
    <Grid>
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
          rating: !!film.rating.average ? film.rating.average : NA,
          id: film.id,
          href: film._links.self.href,
        };
        return (
          <GridItem key={film.id}>
            <FilmCard film={filmData} />
          </GridItem>
        );
      })}
    </Grid>
  );
}
