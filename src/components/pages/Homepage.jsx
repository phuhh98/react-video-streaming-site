import React from 'react';
import { CardGroup, Row, Col } from 'reactstrap';

import FilmCard from '../film-card/FilmCard';
export default function HomePage() {
	return (
		<>
			<p>The Home page</p>
			<Row lg="4" md="3" sm="2" xs="1">
				<Col className="bg-light">
					<FilmCard></FilmCard>
				</Col>
				<Col className="bg-light">
					<FilmCard></FilmCard>
				</Col>
				<Col className="bg-light">
					<FilmCard></FilmCard>
				</Col>
				<Col className="bg-light">
					<FilmCard></FilmCard>
				</Col>
				<Col className="bg-light">
					<FilmCard></FilmCard>
				</Col>{' '}
				<Col className="bg-light">
					<FilmCard></FilmCard>
				</Col>{' '}
				<Col className="bg-light">
					<FilmCard></FilmCard>
				</Col>{' '}
				<Col className="bg-light">
					<FilmCard></FilmCard>
				</Col>{' '}
				<Col className="bg-light">
					<FilmCard></FilmCard>
				</Col>{' '}
				<Col className="bg-light">
					<FilmCard></FilmCard>
				</Col>
			</Row>
		</>
	);
}
