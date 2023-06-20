import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { CiTimer } from 'react-icons/ci'
import { TbBrandTelegram } from 'react-icons/tb'
import { TfiEmail } from 'react-icons/tfi'
import { FaBars, FaWindowClose } from 'react-icons/fa'


function Header() {
	const [burger, setBurger] = useState(true)

	return (
		<div className='header'>
			<div className='header__container'>
				<div className='contact__info'>
					<span>
						<CiTimer className='header__icons' />
						<p>Almashtirish 24/7</p>
					</span>
					<span>
						<TbBrandTelegram className='header__icons' />
						<p className='pragraf__hover'>Telegram (Umumiy savollar)</p>
					</span>
					<span>
						<TbBrandTelegram className='header__icons' />
						<p className='pragraf__hover'>Telegram (Naqd pul almashinuvi)</p>
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
				<div className='header__nav'>
					<div className='site__logo'>
						<Link to='/'>
							<h1>Kingex</h1>
						</Link>
					</div>
					<nav>
						<ul>
							<li>
								<Link to='/partners'>
									Hamkorlar
								</Link>
							</li>
							<li>
								<Link to='/rules'>
									Birja qoidalari
								</Link>
							</li>
							<li>
								<Link to='/info'>
									TSS
								</Link>
							</li>
							<li>
								<Link to='/contact'>
									Kontaktlar
								</Link>
							</li>
						</ul>
					</nav>
					<div className='nav__log'>
						<Link
							to='/login'
							className='login'
							onClick={() => setBurger(!burger)}
						>
							Kirish
						</Link>
						<Link
							className='registr'
							to='/register'
							onClick={() => setBurger(!burger)}
						>
							Ro'yxatdan o'tish
						</Link>
					</div>
					<div className='burger'>
						{burger ? (
							<FaBars
								className='humburger'
								onClick={() => setBurger(!burger)}
							/>
						) : (
							<FaWindowClose
								className='close'
								onClick={() => setBurger(!burger)}
							/>
						)}
					</div>
				</div>
				<div className={burger ? 'navbar' : 'navbar-active'}>
					<div className='site__logo'>
						<Link to='/'>
							<h1>Kingex</h1>
						</Link>
					</div>
					<nav>
						<ul>
							<li className='home'>
								<Link to='/' onClick={() => setBurger(!burger)}>
									Asosiy
								</Link>
							</li>
							<li>
								<Link to='/partners' onClick={() => setBurger(!burger)}>
									Hamkorlar
								</Link>
							</li>
							<li>
								<Link to='/rules' onClick={() => setBurger(!burger)}>
									Birja qoidalari
								</Link>
							</li>
							<li>
								<Link to='/info' onClick={() => setBurger(!burger)}>
									TSS
								</Link>
							</li>
							<li>
								<Link to='/contact' onClick={() => setBurger(!burger)}>
									Kontaktlar
								</Link>
							</li>
						</ul>
					</nav>
					<div className='nav__log'>
						<Link
							to='/login'
							className='login'
							onClick={() => setBurger(!burger)}
						>
							Kirish
						</Link>
						<Link
							className='registr'
							to='/register'
							onClick={() => setBurger(!burger)}
						>
							Ro'yxatdan o'tish
						</Link>
					</div>
					<div className='burger'>
						{burger ? (
							<FaBars
								className='humburger'
								onClick={() => setBurger(!burger)}
							/>
						) : (
							<FaWindowClose
								className='close'
								onClick={() => setBurger(!burger)}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
