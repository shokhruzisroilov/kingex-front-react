import React from 'react'
import './HomePage.scss'

import GivePage from '../components/givePage/GivePage'
import TakePage from '../components/takePage/TakePage'
import DataEntry from '../components/dataEntryPage/DataEntry'

function HomePage() {
	return (
		<div className='home'>
			<div className='home__container'>
				<GivePage />
				<TakePage />
				<DataEntry />
			</div>
		</div>
	)
}

export default HomePage