// @ts-nocheck

async function Load(params){
	try{
    	const res = await fetch(params.url)
    	const data: any = await res.json()
    	const status = 'success'
    	params.callback({ data, status })
	}catch(e){
	    params.callback({ data: e, status: 'error'})
	}
}

export const Loader = {
	_baseUrl: `http://localhost:5248/hotels`,
	hotelById: function(id: number, callback: (res: any)=>void){
		return Load({url: this._baseUrl+'/'+id, callback})
	},
	allHotels: function (callback: (res: any)=>void){
		return Load({url: this._baseUrl, callback})
	}
}