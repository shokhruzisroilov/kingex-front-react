import React from 'react'
import './DataEntry.scss'

import {MdEmail} from 'react-icons/md'
import { AiFillCreditCard } from 'react-icons/ai'

function DataEntry() {
	return (
		<div className='data__entry'>
			<h3>Ma'lumotlarni kiritish</h3>
			<div className='rate'>
				<span className='rate-text'>
					<h4>Ayirboshlash kursi: 1 ETH = 62946.2923 UAH</h4>
					<p>Narx ilova yaratilgandan keyin belgilanadi</p>
				</span>
				<div className='timer-wrapper'>
					<p>10</p>
				</div>
			</div>
			<div className='data__second'>
				<div className='second'>
					<span>
						<p>Bitcoin</p>
						<h4>0.01BTC</h4>
					</span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 2000 2000'
						width='40px'
						height='40px'
						fit=''
						preserveAspectRatio='xMidYMid meet'
						focusable='false'
					>
						<path
							d='M1970,1242c-133.48,535.66-676.18,861.68-1212,728S-103.69,1293.89,30,758.18,706.12-103.7,1241.82,30,2103.69,706.16,1970,1242h0Z'
							fill='#f7931a'
						></path>
						<path
							d='M1441,857.53c19.88-133.07-81.44-204.61-220-252.33l45-180.25-109.76-27.34-43.84,175.51c-28.82-7.18-58.44-14-87.88-20.68l44-176.67L958.87,348.43,914,528.61,692.68,473.79,663.48,591s81.42,18.66,79.7,19.82c44.44,11.1,52.5,40.5,51.14,63.82l-123.14,493.8c-5.44,13.5-19.22,33.74-50.28,26,1.1,1.6-79.76-20-79.76-20l-54.48,125.79,221,55.8-45.42,182.35,109.6,27.34,45-180.39c30,8.12,59,15.62,87.42,22.68l-44.82,179.55,109.74,27.34,45.42-182c187.13,35.4,327.85,21.12,387-148,47.72-136.25-2.34-214.85-100.8-266.13,71.7-16.6,125.7-63.74,140.11-161.17m-250.71,351.52c-34,136.25-263.35,62.62-337.77,44.12l60.26-241.55c74.38,18.56,312.89,55.32,277.55,197.41m34-353.5c-30.94,124-221.91,61-283.89,45.54L994.91,682c62,15.48,261.51,44.3,229.25,173.59'
							fill='#fff'
						></path>
					</svg>
				</div>
				<div className='second'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 2000 2000'
						width='40px'
						height='40px'
						fit=''
						preserveAspectRatio='xMidYMid meet'
						focusable='false'
					>
						<path
							d='M1970,1242c-133.48,535.66-676.18,861.68-1212,728S-103.69,1293.89,30,758.18,706.12-103.7,1241.82,30,2103.69,706.16,1970,1242h0Z'
							fill='#f7931a'
						></path>
						<path
							d='M1441,857.53c19.88-133.07-81.44-204.61-220-252.33l45-180.25-109.76-27.34-43.84,175.51c-28.82-7.18-58.44-14-87.88-20.68l44-176.67L958.87,348.43,914,528.61,692.68,473.79,663.48,591s81.42,18.66,79.7,19.82c44.44,11.1,52.5,40.5,51.14,63.82l-123.14,493.8c-5.44,13.5-19.22,33.74-50.28,26,1.1,1.6-79.76-20-79.76-20l-54.48,125.79,221,55.8-45.42,182.35,109.6,27.34,45-180.39c30,8.12,59,15.62,87.42,22.68l-44.82,179.55,109.74,27.34,45.42-182c187.13,35.4,327.85,21.12,387-148,47.72-136.25-2.34-214.85-100.8-266.13,71.7-16.6,125.7-63.74,140.11-161.17m-250.71,351.52c-34,136.25-263.35,62.62-337.77,44.12l60.26-241.55c74.38,18.56,312.89,55.32,277.55,197.41m34-353.5c-30.94,124-221.91,61-283.89,45.54L994.91,682c62,15.48,261.51,44.3,229.25,173.59'
							fill='#fff'
						></path>
					</svg>
					<span>
						<p>Bitcoin</p>
						<h4>0.01BTC</h4>
					</span>
				</div>
			</div>
			<div className='error'>
				<h4>Error!</h4>
				<p>You must agree to the terms of the exchange</p>
			</div>
			<div className='data__text'>
				<h4>
					Kartalar bilan operatsiyalar operatorning ishi davomida yarim
					avtomatik rejimda amalga oshiriladi va 20-tarmoqni tasdiqlashni
					olgandan keyin 60 daqiqagacha davom etadi.
				</h4>
				<p>
					Naqd pul yechish operatsiyalari dushanbadan shanbagacha soat 10:00 dan
					18:00 gacha amalga oshiriladi.
				</p>
				<p>
					Ushbu yo'nalishda sizning mablag'laringizni AML-Check amalga
					oshiriladi. Pul mablag'lari noqonuniy manbalarga ulangan taqdirda,
					ayirboshlash to'xtatiladi.
				</p>
			</div>
			<form>
				<span className='inputs'>
					<input type='email' placeholder='Elektron pochtani kiriting' />
					<MdEmail className='icons' />
				</span>
				<span className='inputs'>
					<input type='text' placeholder='Kartani kiriting' />
					<AiFillCreditCard className='icons' />
				</span>
				<span className='checkbox checkbox1'>
					<input type='checkbox' />
					<p>Men xizmat shartlari va shartlariga roziman</p>
				</span>
				<span className='checkbox'>
					<input type='checkbox' />
					<p>Men AML/CTF va KYC shartlariga roziman</p>
				</span>
				<button type='button'>To'lovga o'ting</button>
			</form>
		</div>
	)
}

export default DataEntry
