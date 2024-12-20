import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { RoomsCard } from './RoomsCard'
//feel like hotel shouldnt be optional
type HotelProps = {
	hotel?: Hotel
}
//given hotel info as props renders hotel card
//styling can be better, but not high priority
//?reusable component on every hotel field with a condition that it may or may not be present etc
export const HotelCard: React.FC<HotelProps> = (props: HotelProps) => (
	<Container style={{padding: '1em'}}>
		{props.hotel ? (
			<Row>
				<Col xs={6} md={4}>
		          <Image
		          	src="https://upload.wikimedia.org/wikipedia/uk/9/9a/%D0%91%D1%96%D0%B7%D0%BD%D0%B5%D1%81-%D1%86%D0%B5%D0%BD%D1%82%D1%80_%D0%BF%D0%BE%D0%B4%D0%B2%D1%96%D1%80%27%D1%8F_%2820200624%29.jpg"
		          		rounded fluid />
		        </Col>
		        <Col xs={6} md={4}>
		          	<h3>{props.hotel.name}</h3>
					<h4>{props.hotel.location}</h4>
					<h5>{props.hotel.rating}</h5>
					{
						//i hate that
						props.hotel.datesOfTravel && <h6>{props.hotel.datesOfTravel.join(' - ')}</h6>
					}
					<h5>{props.hotel.boardBasis}</h5>
		        </Col>
		        <Col xs={6} md={4}>
		          <RoomsCard rooms={props.hotel.rooms || []} />
		        </Col>
			</Row>
		) : <div>no data</div>}
	</Container>
)
