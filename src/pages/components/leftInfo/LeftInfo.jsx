import '../../Info.scss'
import React from 'react'
import { NavLink } from 'react-router-dom'

	let clazz = 'span'
	let activeClazz = 'span-active'

function LeftInfo() {
	return (
		<div className='left__info'>
			<h3>TSS</h3>
			<p>
				Bu erda siz eng ko'p beriladigan savollarga <br />
				javob topishingiz mumkin
			</p>
			<div className='info__tab'>
				<NavLink
					className={({ isActive }) => (isActive ? activeClazz : clazz)}
					to='/info/general'
				>
					Umumiy savollar
				</NavLink>
				<NavLink
					className={({ isActive }) => (isActive ? activeClazz : clazz)}
					to='/info/cash'
				>
					Naqd pul operatsiyalari
				</NavLink>
				<NavLink
					className={({ isActive }) => (isActive ? activeClazz : clazz)}
					to='/info/check'
				>
					AML tekshiruvi
				</NavLink>
			</div>
		</div>
	)
}

export default LeftInfo