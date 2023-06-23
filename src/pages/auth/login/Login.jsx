import React from 'react'
import './Login.scss'
import Outline from '../../../components/outline/Outline'
import {GrClose} from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const navigate = useNavigate()

	const onSubmit = async e => {
		e.preventDefault()
		let req = await fetch('https://exchanger.adew.uz/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},

			body: JSON.stringify({
				email: email,
				password: password,
			}),
		})
		req = await req.json()

		if (req.token) {
			navigate('/')
			localStorage.setItem('accessToken', req.token)
			setError('')
		} else {
			setError('Invaid input! Chek your email or password and try again')
		}
	}
	return (
		<div className='login__window'>
			<div className='login__mode'>
				<Link to='/' className='login__header'>
					<GrClose className='close-icon' />
				</Link>
				<h3>Shaxsiy hisobingizga kiring</h3>
				<form onSubmit={onSubmit}>
					<input
						type='email'
						placeholder='E-mail manzilingizni kiriting'
						onChange={({ target }) => setEmail(target.value)}
					/>
					<input type='password' placeholder='Parolni kiriting' />
					<p className='error'>{error}</p>
					<span className='password'>Parolni tiklash</span>{' '}
					<br onChange={({ target }) => setPassword(target.value)} />
					<button className='btn-login' type='submit'>
						Kirish
					</button>
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