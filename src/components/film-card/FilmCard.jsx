import React, { useState } from 'react';

import {
	Card,
	CardBody,
	CardTitle,
	CardText,
	CardSubtitle,
	CardImg
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faHeart } from '@fortawesome/free-solid-svg-icons';

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
		<div>
			<Card style={{ marginBottom: '20px' }}>
				<CardImg
					alt="Under the dome"
					src="https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg"
					top
					width="100%"
				/>
				<CardBody>
					<CardTitle tag="h5">Under the Dome</CardTitle>
					<CardSubtitle className="mb-2 text-muted" tag="h6">
						Drama &bull; Science-Fiction &bull; Thriller
					</CardSubtitle>
					<FontAwesomeIcon
						icon={faHeart}
						style={{ color: heartColor }}
						onClick={changeFavorite}
					/>
					<FontAwesomeIcon
						icon={faThumbsUp}
						style={{ color: likeColor }}
						onClick={changeLike}
					/>
					{/* <CardText
						style={{
							display: '-webkit-box',
							WebkitBoxOrient: 'vertical',
							WebkitLineClamp: '3',
							overflow: 'hidden',
							textOverflow: 'ellipsis'
						}}
					>
						<b>Under the Dome</b> is the story of a small town that is suddenly
						and inexplicably sealed off from the rest of the world by an
						enormous transparent dome. The town's inhabitants must deal with
						surviving the post-apocalyptic conditions while searching for
						answers about the dome, where it came from and if and when it will
						go away.
					</CardText> */}
				</CardBody>
			</Card>
		</div>
	);
}
