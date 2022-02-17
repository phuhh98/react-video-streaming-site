import React, { useState } from 'react';

import {
	Container,
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardImg,
	Button,
	UncontrolledTooltip
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import CursorHover from '../../utilWrapper/CursorHover';

export default function FilmCard(props) {
	let [heartColor, setHeartColor] = useState('gray');
	const changeFavorite = () => {
		setHeartColor(heartColor === 'gray' ? 'red' : 'gray');
	};
	let [likeColor, setLikeColor] = useState('gray');
	const changeLike = () => {
		setLikeColor(likeColor === 'gray' ? 'turquoise' : 'gray');
	};

	return (
		<>
			<Card style={{ marginBottom: '20px', height: '475px' }}>
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
							WebkitLineClamp: '2',
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
									id={`fav-${props.data.id}`}
								/>
								<UncontrolledTooltip
									placement="bottom"
									target={`fav-${props.data.id}`}
								>
									Mark as favorite
								</UncontrolledTooltip>
							</CursorHover>

							<CursorHover>
								<FontAwesomeIcon
									icon={faThumbsUp}
									className="fa-xl"
									style={{ color: likeColor }}
									onClick={changeLike}
									id={`like-${props.data.id}`}
								/>
							</CursorHover>
							<UncontrolledTooltip
								placement="right"
								target={`like-${props.data.id}`}
							>
								Give a like
							</UncontrolledTooltip>
						</div>
					</Container>
				</CardBody>
			</Card>
		</>
	);
}
