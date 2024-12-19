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

type LoaderResponse = {
	status: 'success' | 'error'
}

type LoaderResponseHotel = LoaderResponse & { data?: Hotel }

type LoaderResponseHotels = LoaderResponse & { data?: Array<Hotel> }