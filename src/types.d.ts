//all types besides component prop types are here
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
	datesOfTravel?: Array<string>,
	boardBasis?: string,
	rooms?: Array<Room>,
}
// ?i have a feeling that this needs to be fixed but i don't know how yet(
type DataError = string
type DataHotels = Array<Hotel>
type DataHotel = Hotel
type LoaderResponseData = DataError | DataHotel | DataHotels
type LoaderResponse = {
	status: 'success' | 'error',
	data: LoaderResponseData
}
type LoadParams = {
	url: string,
	callback: (response: LoaderResponse)=>void
}