import React from 'react'
import './Register.scss'
import Outline from '../../../components/outline/Outline'
import { GrClose } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
	const [name, setName] = useState("")
	const [c_password, setC_password] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()

		const onSubmit = async e => {
			let item = {name, password, email}
			console.warn(item)
			e.preventDefault()
			let req = await fetch('https://exchanger.adew.uz/api/register', {
				method: 'POST',
				body: JSON.stringify(item),
				headers: {
					'Content-Type': 'application/json',
					Accept: 'applicati on/json',
				},
			})
			console.log(req)
			req = await req.json()
			localStorage.setItem("accessToken", JSON.stringify(req))
			navigate('/')
		}

	return (
		<div className='register__window'>
			<div className='register__mode'>
				<Link to='/' className='login__header'>
					<GrClose className='close-icon' />
				</Link>
				<h3>Hisob ochish</h3>
				<form onSubmit={onSubmit}>
					<input
						type='text'
						value={name}
						placeholder='Ismingizni kiriting'
						onChange={e => setName(e.target.value)}
					/>
					<input
						type='email'
						value={email}
						placeholder='Elektron pochtangizni kiriting'
						onChange={e => setEmail(e.target.value)}
					/>
					<input
						type='password'
						value={password}
						placeholder='Parolni kiriting'
						onChange={e => setPassword(e.target.value)}
					/>
					<input
						type='password'
						value={c_password}
						placeholder='Parolni qayta kiriting'
						onChange={e => setC_password(e.target.value)}
					/>
					<span className='password'>Parol yarating</span> <br />
					<button className='btn-login' type='submit'>
						Ro'yxatdan o'tish
					</button>
				</form>
			</div>
			<Outline />
		</div>
	)
}

export default Register