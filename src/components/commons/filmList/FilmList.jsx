import React from 'react';

import { Row, Col } from 'reactstrap';

import FilmCard from '../film-card/FilmCard';

export default function FilmList(props) {
	return (
		<Row lg="4" md="3" sm="2" xs="1">
			{props.filmList.map(film => {
				const filmData = {
					imgSrc: film.image.medium,
					imgAlt: film.name,
					genres: film.genres,
					filmTitle: film.name,
					rating: film.rating.average,
					id: film.id
				};
				// console.log(filmData);
				return (
					<Col className="bg-light" key={film.id}>
						<FilmCard data={filmData} />
					</Col>
				);
			})}
		</Row>
	);
}
