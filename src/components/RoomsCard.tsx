import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

type RoomsProps = {
	rooms: Array<Room> | []
}
type RoomProps = {
	room: Room
}

const RoomInfo: React.FC<RoomProps> = (props: RoomProps) => (
	<Row>
		<Col xs={6} md={6}><h6>{props.room.roomType}</h6></Col>
		<Col xs={6} md={6}><h6>{props.room.amount}</h6></Col>
	</Row>
)

export const RoomsCard: React.FC<RoomsProps> = (props: RoomsProps) => (
	<Container>
		<Row>
			<h5>Rooms:</h5>
		</Row>
		<Row>
			<Col xs={6} md={6}><h6>Type:</h6></Col>
			<Col xs={6} md={6}><h6>Amount:</h6></Col>
		</Row>
		<>
			{props.rooms.map((r: Room) => <RoomInfo room={r}/>)}
		</>
	</Container>
)