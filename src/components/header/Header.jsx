import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

import { CiTimer } from 'react-icons/ci'
import { TbBrandTelegram } from 'react-icons/tb'
import { TfiEmail } from 'react-icons/tfi'


function Header() {
	return (
		<div className='header'>
			<div className='header__container'>
				<div className='contact__info'>
					<span>
						<CiTimer className='header__icons' />
						<p>Exchange 24/7</p>
					</span>
					<span>
						<TbBrandTelegram className='header__icons' />
						<p className='pragraf__hover'>Telegram (General questions)</p>
					</span>
					<span>
						<TbBrandTelegram className='header__icons' />
						<p className='pragraf__hover'>Telegram (Cash exchange)</p>
					</span>
					<span>
						<TfiEmail className='header__icons' />
						<p>info@kingex.io</p>
					</span>
					<span>
						<TbBrandTelegram className='header__icons' />
						<p className='pragraf__hover'>AML/KYC</p>
					</span>
				</div>
				<div className='navbar'>
					<div className='site__logo'>
						<h1>Kingex</h1>
					</div>
					<nav>
						<ul>
							<li>
								<Link>Partners</Link>
							</li>
							<li>
								<Link>Exchange rules</Link>
							</li>
							<li>
								<Link>FAQ</Link>
							</li>
							<li>
								<Link>Contacts</Link>
							</li>
						</ul>
					</nav>
					<div className='nav__log'>
						<Link className='login'>Login</Link>
						<Link className='registr'>Registration</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
