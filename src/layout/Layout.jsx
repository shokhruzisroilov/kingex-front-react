import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Outline from '../components/outline/Outline'
import Message from '../components/message/Message'
import Language from '../components/language/Language'

function Layout() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
			<Outline />
			<Message />
			<Language />
		</>
	)
}

export default Layout