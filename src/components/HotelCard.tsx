type Room = {
	roomType?: string,
	amount?: number
}
type Hotel = {
	id: number,
	name?: string,
	location?: string,
	rating?: number,
	imageUrl?: string,
	datesOfTravel?: string,
	boardBasis?: string,
	rooms?: Array<Room>,
}
type HotelProps = Hotel | any

export const HotelCard = (props: HotelProps) => {
	console.log(props)
	return (
		<article>
			<header>
				<h3>{props.hotel.name}</h3>
				<h4>{props.hotel.location}</h4>
				<h5>{props.hotel.rating}</h5>
			</header>
			<main>
				<img src="https://upload.wikimedia.org/wikipedia/commons/7/74/A-Cat.jpg" style={{width:100,height:100}}/>
				<ul>
					{
						props.hotel.rooms && props.hotel.rooms.map((e: any) => <li>{JSON.stringify(e)}</li>)
					}
				</ul>
			</main>
			<footer>
				<h5>{props.hotel.datesOfTravel}</h5>
				<h5>{props.hotel.boardBasis}</h5>
			</footer>
		</article>
	)
}