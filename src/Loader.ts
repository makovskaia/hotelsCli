
async function Load(params: LoadParams){
	try{
    	const res: Response = await fetch(params.url)
    	console.log(res)
    	if(res.ok){
    		const data: Hotel | Array<Hotel> = await res.json()
    		const status = 'success'
    		console.log(data)
    		params.callback({ data, status })
    	}else{
    		const status = 'error'
    		const data: string = await res.json()
    		console.log(data)
    		params.callback({ data, status })
    	}
	}catch(e){
		console.log(e)
	    params.callback({ data: 'Unable to connect to the server', status: 'error'})
	}
}

export const Loader = {
	_baseUrl: `http://localhost:5248/hotels`,
	hotelById: function(id: string, callback: (res: any)=>void){
		return Load({url: this._baseUrl+'/'+id, callback})
	},
	allHotels: function (callback: (res: any)=>void){
		return Load({url: this._baseUrl, callback})
	}
}