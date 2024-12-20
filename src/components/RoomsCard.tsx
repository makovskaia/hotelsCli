import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//i feel like there is no need for an empty array, but i leave it for now 
type RoomsProps = {
	rooms: Array<Room> | []
}
type RoomProps = {
	room: Room
}
//component that renders available room 
const RoomInfo: React.FC<RoomProps> = (props: RoomProps) => (
	<Row>
		<Col xs={6} md={6}><p>{props.room.roomType}</p></Col>
		<Col xs={6} md={6}><p>{props.room.amount}</p></Col>
	</Row>
)
//component that accepts array of rooms as prop and renders rooms table
export const RoomsCard: React.FC<RoomsProps> = (props: RoomsProps) => (
	<Container>
		<Row>
			<h4>Rooms:</h4>
		</Row>
		<Row style={{borderBottom: '1px solid grey'}}>
			<Col xs={6} md={6}><h6>Type:</h6></Col>
			<Col xs={6} md={6}><h6>Amount:</h6></Col>
		</Row>
		<ul style={{all:'unset'}}>
			{
			//here it makes a list of RoomInfo components
				props.rooms.map((room: Room, id: number) => (
				<li key={id} style={{all:'unset'}}>
					<RoomInfo room={room}/>
				</li>
			))}
		</ul>
	</Container>
)