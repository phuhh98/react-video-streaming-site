import React, { useState } from 'react';

import {
	Container,
	Card,
	CardBody,
	CardTitle,
	CardText,
	CardSubtitle,
	CardImg,
	Button
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import CursorHover from '../utilWrapper/CursorHover';

export default function FilmCard(props) {
	let [heartColor, setHeartColor] = useState('gray');
	const changeFavorite = () => {
		setHeartColor(heartColor === 'gray' ? 'red' : 'gray');
	};
	let [likeColor, setLikeColor] = useState('gray');
	const changeLike = () => {
		setLikeColor(likeColor === 'gray' ? 'turquoise' : 'gray');
	};
	console.log(props.data);

	return (
		<>
			<Card style={{ marginBottom: '20px', height: '450px' }}>
				<CardImg
					alt={props.data.imgAlt}
					src={props.data.imgSrc}
					top
					height="300px"
				/>
				<CardBody style={{ position: 'relative' }}>
					<CardTitle tag="h5">{props.data.filmTitle}</CardTitle>
					<CardSubtitle
						className="mb-2 text-muted"
						tag="h6"
						style={{
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							display: '-webkit-box',
							WebkitLineClamp: '3',
							WebkitBoxOrient: 'vertical'
						}}
					>
						{props.data.genres.join(' • ')}
					</CardSubtitle>
					<Container
						style={{
							padding: '0',
							width: '87%',
							display: 'flex',
							justifyContent: 'space-between',
							position: 'absolute',
							bottom: '0.7rem'
						}}
					>
						<Button disabled style={{ padding: '5px 10px' }}>
							Rate: {props.data.rating}&nbsp;
							<FontAwesomeIcon icon={faStar} style={{ color: 'yellow' }} />
						</Button>
						<div
							style={{
								width: '30%',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center'
							}}
						>
							<CursorHover>
								<FontAwesomeIcon
									icon={faHeart}
									className="fa-xl"
									style={{ color: heartColor }}
									onClick={changeFavorite}
								/>
							</CursorHover>
							<CursorHover>
								<FontAwesomeIcon
									icon={faThumbsUp}
									className="fa-xl"
									style={{ color: likeColor }}
									onClick={changeLike}
								/>
							</CursorHover>
						</div>
					</Container>
				</CardBody>
			</Card>
		</>
	);
}