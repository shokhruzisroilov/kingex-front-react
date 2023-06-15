import React from 'react'
import './Error404Page.scss'

import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Outline from '../components/outline/Outline'
import { Link } from 'react-router-dom'

import { FcLock } from 'react-icons/fc'

function Error404Page() {
	return (
		<>
			<Header />
			<div className='error404'>
				<div className='error404__container'>
					<FcLock className='lock'/>
					<h3>Attention! Page not found!</h3>
					<p>
						Perhaps this page has been deleted or you made a mistake in typing
						the page address. Go to the main page and use the navigation menu.
					</p>
					<Link to="/" className='botton-home'>Goto Home</Link>
				</div>
			</div>
			<Footer />
			<Outline />
		</>
	)
}

export default Error404Page