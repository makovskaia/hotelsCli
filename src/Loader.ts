//reusable load function that takes url and a callback(what to do with fetched results) as parameters
//and feeds a response obj that contains status and fetched data to the callback function 
async function Load(params: LoadParams){
	try{
    	const res: Response = await fetch(params.url)
    	//if we got an ok response 
    	if(res.ok){
    		//results only may be a hotel or a list of hotels
    		// ?it would be better to have only one type as data but it will result code dublication? 
    		const data: Hotel | Array<Hotel> = await res.json()
    		const status = 'success'
    		params.callback({ data, status })
    	}else{
    		//if we got not ok response (500 or 404)
    		const status = 'error'
    		const data: string = await res.json()
    		//the body of response will be a string explaining what happened 
    		params.callback({ data, status })
    	}
    //if we did not get a response
	}catch(e){
	    params.callback({ data: 'Unable to connect to the server', status: 'error'})
	}
}
//here we export object with specific methods that reuse loader with parameters needed. We use it in React components  
export const Loader = {
	_baseUrl: `http://localhost:5248/hotels`,
	hotelById: function(id: string, callback: (res: LoaderResponse)=>void){
		return Load({url: this._baseUrl+'/'+id, callback})
	},
	allHotels: function (callback: (res: LoaderResponse)=>void){
		return Load({url: this._baseUrl, callback})
	}
}