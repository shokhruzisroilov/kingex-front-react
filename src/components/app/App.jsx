import './App.scss';
import {Routes, Route } from 'react-router-dom';
import Layout from '../../layout/Layout';
import { Navigate } from 'react-router-dom';

import HomePage from '../../pages/HomePage';
import Login from '../../login/Login';
import Error404Page from '../../error/Error404Page';

function App() {
  return (
		<>
			<Routes>
				{/* <Route path='/' element={<Navigate to={'/sign-in'} />} /> */}
				<Route path='/home' element={<Layout />}>
					<Route index element={<HomePage />} />
					{/* <Route path='/nimadur' element={nimadur}/> */}
				</Route>
				{/* <Route path='/sign-in' element={<Login />} />	 */}
				<Route path='*' element={<Error404Page />} />
			</Routes>
		</>
	)
}

export default App;
