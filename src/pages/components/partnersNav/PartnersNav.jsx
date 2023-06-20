import React from 'react'
import './PartnersNav.scss'
import { NavLink } from 'react-router-dom'

	let clazz = 'nav-button'
	let activeClazz = 'nav-button-active'

function PartnersNav() {
	return (
		<div className='header__pertners'>
			<h1>Hamkorlar</h1>
			<nav>
				<ul>
					<li>
						<NavLink
							to='/partners/referral'
							className={({ isActive }) => (isActive ? activeClazz : clazz)}
						>
							Referral program
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/partners/cashback'
							className={({ isActive }) => (isActive ? activeClazz : clazz)}
						>
							Cashback
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/partners/monitoring'
							className={({ isActive }) => (isActive ? activeClazz : clazz)}
						>
							Monitoring
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default PartnersNav
