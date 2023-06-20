import React from 'react'
import './Cashback.scss'

import { BiLink, BiNews, BiDollar } from 'react-icons/bi'

function Cashback() {
	return (
		<div className='cashback'>
			<div className='paragraf'>
				<p>
					Saytda ro'yxatdan o'tgan har bir foydalanuvchi almashtirish uchun naqd
					pul olish imkoniyatiga ega bo'ladi! Ayirboshlash uchun cashback
					ro'yxatdan o'tgandan so'ng darhol sizga taqdim etiladi va 0,01% ni
					tashkil qiladi! 2000 dollardan ortiq almashsangiz, mukofot 0,02%
					gacha, 10 000 dollardan ortiq almashsangiz, bonus 0,05% gacha
					oshiriladi!
				</p>
				<p>Cashback chegirmasi qanday hisoblanadi?</p>
			</div>
			<h3>Cashbackni qanday olish mumkin?</h3>
			<div className='how__work'>
				<div className='works'>
					<div className='icons'>
						<span>1</span>
					</div>
					<div className='text'>
						<h4>Ro‘yxatdan o‘tish</h4>
						<p>Saytda ro'yxatdan o'ting</p>
					</div>
				</div>
				<div className='works'>
					<div className='icons'>
						<span>2</span>
					</div>
					<div className='text'>
						<h4>Ayirboshlash</h4>
						<p>Har qanday tegishli yo'nalish</p>
					</div>
				</div>
				<div className='works'>
					<div className='icons'>
						<span>3</span>
					</div>
					<div className='text'>
						<h4>Cashback olish*</h4>
						<p>Cashback miqdori ayirboshlash miqdoriga bog'liq</p>
					</div>
				</div>
			</div>
			<h3 className='heading__h3'>
				Ayirboshlash uchun jamlangan naqd pul berish tizimi:
			</h3>
			<div className='sestim__referral'>
				<div className='sestem'>
					<span className='ses sestem1'>0.01%</span>
					<p>saytda ro'yxatdan o'tgandan keyin</p>
				</div>
				<div className='sestem'>
					<span className='ses sestem2'>0.02%</span>
					<p>2000 dollardan almashtirganda</p>
				</div>
				<div className='sestem'>
					<span className='ses sestem3'>0.05%</span>
					<p>10 000 dollardan almashtirganda</p>
				</div>
			</div>
			<h5>
				Eslatma! Cashback sizning har bir tranzaktsiyangizdan xizmatdan tushgan
				daromaddan hisoblab chiqiladi. Xizmat ayirboshlashdan foyda
				keltirmaydigan hollarda, naqd pul hisoblanmaydi.
			</h5>
		</div>
	)
}

export default Cashback