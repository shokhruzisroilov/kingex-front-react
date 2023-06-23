import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from '../../layout/Layout'
import { Navigate } from 'react-router-dom'

import HomePage from '../../pages/HomePage'
import './App.scss'
import Login from '../../pages/auth/login/Login'
import Register from '../../pages/auth/register/Register'
import Error404Page from '../../pages/error/Error404Page'
import SiteRules from '../../pages/SiteRules'
import Info from '../../pages/Info'
import Contact from '../../pages/Contact'
import Admin from '../../admin/Admin'

import PartnersLayout from '../../pages/PartnersLayout'
import Referral from '../../pages/components/referral/Referral'
import Cashback from '../../pages/components/cashback/Cashback'
import Monitoring from '../../pages/components/monitoring/Monitoring'
import GeneralInfo from '../../pages/components/generalInfo/GeneralInfo'
import CashInfo from '../../pages/components/cashInfo/CashInfo'
import CheckInfo from '../../pages/components/checkInfo/CheckInfo'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='/partners' element={<PartnersLayout />}>
						<Route path='/partners' element={<Referral />} />
						<Route path='/partners/referral' element={<Referral />} />
						<Route path='/partners/cashback' element={<Cashback />} />
						<Route path='/partners/monitoring' element={<Monitoring />} />
					</Route>
					<Route path='/rules' element={<SiteRules />} />
					<Route path='/info' element={<Info />}>
						<Route path='/info' element={<GeneralInfo />} />
						<Route path='/info/general' element={<GeneralInfo />} />
						<Route path='/info/cash' element={<CashInfo />} />
						<Route path='/info/check' element={<CheckInfo />} />
					</Route>
					<Route path='/contact' element={<Contact />} />
				</Route>
				<Route path='/admin' element={<Admin />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='*' element={<Error404Page />} />
			</Routes>
		</>
	)
}

export default App
