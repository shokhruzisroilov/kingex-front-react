import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from '../../layout/Layout'
import { Navigate } from 'react-router-dom'

import HomePage from '../../pages/HomePage'
import "./App.scss"
import Login from '../../login/Login'
import Register from '../register/Register'
import Error404Page from '../../error/Error404Page'
import Partners from '../../pages/Partners'
import SiteRules from '../../pages/SiteRules'
import Info from '../../pages/Info'
import Contact from '../../pages/Contact'

import Referral from '../../pages/components/referral/Referral'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='/partners' element={<Partners />} />
					<Route path='/rules' element={<SiteRules />} />
					<Route path='/info' element={<Info />} />
					<Route path='/contact' element={<Contact />} />
				</Route>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='*' element={<Error404Page />} />
			</Routes>
		</>
	)
}

export default App
