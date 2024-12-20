// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

type RoomsProps = Array<Room> | any

const RoomInfo: React.FC = ({ room }: Room) => {
	return (
		<Row>
			<Col xs={6} md={6}><h6>{room.roomType}</h6></Col>
			<Col xs={6} md={6}><h6>{room.amount}</h6></Col>
		</Row>
	)
}

export const RoomsCard: React.FC = ({ rooms }: RoomsProps) => {
	console.log(rooms)
	return (
		<Container>
			<Row>
				<h5>Rooms:</h5>
			</Row>
			<Row>
				<Col xs={6} md={6}><h6>Type:</h6></Col>
				<Col xs={6} md={6}><h6>Amount:</h6></Col>
			</Row>
			<>
				{rooms.map(r => <RoomInfo room={r}/>)}
			</>
		</Container>
	)
}