import React from 'react'
import './Register.scss'
import Outline from '../../../components/outline/Outline'
import { GrClose } from 'react-icons/gr'
import { Link } from 'react-router-dom'

function Register() {
	return (
		<div className='register__window'>
			<div className='register__mode'>
				<Link to='/' className='login__header'>
					<GrClose className='close-icon' />
				</Link>
				<h3>Hisob ochish</h3>
				<form>
					<input type='text' placeholder='Ismingizni kiriting' />
					<input type='email' placeholder='E-mail manzilingizni kiriting' />
					<input type='password' placeholder='Parolni kiriting' />
					<input type='password' placeholder='Parolni qayta kiriting' />
					<span className='password'>Parolni yaratish</span> <br />
					<button className='btn-login'>Ro'yhatdan o'tish</button>
				</form>
			</div>
			<Outline />
		</div>
	)
}

export default Register