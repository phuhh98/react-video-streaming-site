import React from 'react';
import { Row, Col } from 'reactstrap';

export const Grid = props => <Row lg="4" md="3" sm="2" xs="1" {...props} />;

export const GridItem = props => <Col className="bg-light" {...props} />;
