import React from 'react'
import './Info.scss'
import LeftInfo from './components/leftInfo/LeftInfo'
import { Outlet } from 'react-router-dom'

function Info() {
	return (
		<div className='info'>
			<div className='info__container'>
				<LeftInfo/>
				<Outlet />
			</div>
		</div>
	)
}

export default Info