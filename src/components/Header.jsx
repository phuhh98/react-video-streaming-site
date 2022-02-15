import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

import ImageContainer from './ImageContainer.jsx';
import logo from '../logo.png';

export default function Header(props) {
	return (
		<header
			className="header"
			style={{
				display: 'grid',
				gridTemplateColumns: '120px auto',
				gridTemplateRows: 'auto auto',
				backgroundColor: '#393939',
				boxShadow: '0 3px 3px 3px #d3d3d3',
				margin: '0 auto',
				color: '#fff'
			}}
		>
			<Link to="/home" style={{ gridColumn: '1/2', gridRow: '1/3' }}>
				{' '}
				<ImageContainer imageSource={logo} width="120px"></ImageContainer>
			</Link>
			<Nav
				pill
				style={{
					justifyItems: 'center',
					alignItems: 'center',
					margin: '0 auto',
					paddingRight: '10%'
				}}
			>
				<NavItem>
					<Link to="/home">
						<NavLink>Home page</NavLink>
					</Link>
				</NavItem>
				<NavItem>
					<Link to="/about">
						<NavLink>About us</NavLink>
					</Link>
				</NavItem>
				<NavItem>
					<Link to="/contact">
						<NavLink>Contact</NavLink>
					</Link>
				</NavItem>
			</Nav>
			<h2
				style={{
					margin: '0 auto',
					paddingRight: '10%'
				}}
			>
				React video streaming project
			</h2>
			{props.children}
		</header>
	);
}
