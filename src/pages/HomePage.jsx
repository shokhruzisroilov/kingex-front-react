import React from 'react'
import './HomePage.scss'

import GivePage from '../components/givePage/GivePage'
import TakePage from '../components/takePage/TakePage'
import DataEntry from '../components/dataEntryPage/DataEntry'

import { useState, useEffect } from 'react'
import apiServices from '.././services/Api'

function HomePage() {
		const [currencyData, setCurrencyData] = useState(null)
		const [loading, setLoading] = useState(true)
		const [error, setError] = useState(false)

		useEffect(() => {
			apiServices
				.getCurrencyList(`currency`)
				.then(data => {
					setCurrencyData(data)
				})
				.then(() => {
					setLoading(false)
				})
				.catch(() => {
					setLoading(false)
					setError(true)
				})
		}, [])
		console.log(currencyData)
	return (
		<div className='home'>
			<div className='home__container'>
				<GivePage currencyData={currencyData}/>
				<TakePage />
				<DataEntry />
			</div>
		</div>
	)
}

export default HomePage