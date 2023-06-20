import React from 'react'
import './PartnersLayout.scss'
import { Outlet } from 'react-router-dom'
import PartnersNav from './components/partnersNav/PartnersNav'

function PartnersLayout() {
	return (
		<div className='partners'>
			<div className='partners__container'>
				<PartnersNav />
				<Outlet />
			</div>
		</div>
	)
}

export default PartnersLayout
