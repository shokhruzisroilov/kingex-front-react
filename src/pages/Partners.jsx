import React from 'react'
import './Partners.scss'	
import { Link } from 'react-router-dom'

import Referral from './components/referral/Referral'

function Partners() {
	return (
		<div className='partners'>
			<div className='partners__container'>
				<div className='header__pertners'>
					<h1>Partner</h1>
					<nav>
						<ul>
							<li>
								<Link className='nav-button'>
									Referral program
								</Link>
							</li>
							<li>
								<Link className='nav-button'>Cashback</Link>
							</li>
							<li>
								<Link className='nav-button'>Monitoring</Link>
							</li>
						</ul>
					</nav>
				</div>
				<div className='main__content'>
					<Referral />
				</div>
			</div>
		</div>
	)
}

export default Partners
