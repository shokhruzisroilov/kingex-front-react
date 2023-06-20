import React from 'react'
import './Login.scss'
import Outline from '../../../components/outline/Outline'
import {GrClose} from 'react-icons/gr'
import { Link } from 'react-router-dom'

function Login() {
	return (
		<div className='login__window'>
			<div className='login__mode'>	
				<Link to='/' className='login__header'>
					<GrClose className='close-icon' />
				</Link>
				<h3>Shaxsiy hisobingizga kiring</h3>
				<form>
					<input type='email' placeholder='E-mail manzilingizni kiriting' />
					<input type='password' placeholder='Parolni kiriting' />
					<span className='password'>Parolni tiklash</span> <br />
					<button className='btn-login'>Kirish</button>
					<span className='or-name'>
						<div />	
						<p>YOKI</p>
						<div />
					</span>
					<span className='media-login'>
						<button className='btn-fas'>Facebook</button>
						<button className='btn-google'>Google</button>
					</span>
				</form>
			</div>
			<Outline />
		</div>
	)
}

export default Login