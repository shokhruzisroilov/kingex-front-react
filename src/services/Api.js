class ApiSerivce {
	baseUrl = 'https://exchanger.adew.uz/api/'
	getData = async api => {
		let res = fetch(`${this.baseUrl}${api}`)

		if (res.ok) {
			throw new Error('Error')
		}
		return (await res).json()
	}

	getCurrencyList = url => {
		return this.getData(url)
	}
}


export default new ApiSerivce()
