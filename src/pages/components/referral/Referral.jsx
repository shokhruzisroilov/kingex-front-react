import React from 'react'
import './Referral.scss'

import { BiLink, BiNews, BiDollar } from 'react-icons/bi'

function Referral() {
	return (
		<div className='referral'>
			<div className='paragraf'>
				<p>
					Do'stlar va hamkorlarimizga xizmatimizni tavsiya eting va biz bilan
					pul ishlang! Sizning tavsiyanoma havolangiz shaxsiy kabinetingizda,
					"Yo'llanma dasturi" bo'limida, uni nusxalang va do'stlaringiz bilan
					baham ko'ring!
				</p>
				<p>
					Sizga qulay bo'lishi uchun sizning shaxsiy hisobingizda yo'naltirilgan
					hisob-kitoblar tarixi saqlanadi, bu sizning tavsiyangiz bo'yicha
					qancha odam ro'yxatdan o'tganligini, shuningdek, naqd pulingizni
					qaytarib olish haqidagi ma'lumotlarni aks ettiradi.
				</p>
				<p>
					Biz yaxshi mukofot bilan bosqichma-bosqich tavsiyanoma dasturini
					ishlab chiqdik:
				</p>
			</div>
			<h3>Bu qanday ishlaydi?</h3>
			<div className='how__work'>
				<div className='works'>
					<div className='icons'>
						<BiLink className='icon' />
					</div>
					<div className='text'>
						<h4>Havolani nusxalash</h4>
						<p>Bo'limda - Yo'naltiruvchi dastur</p>
					</div>
				</div>
				<div className='works'>
					<div className='icons'>
						<BiNews className='icon' />
					</div>
					<div className='text'>
						<h4>Havolani nusxalash</h4>
						<p>Bo'limda - Yo'naltiruvchi dastur</p>
					</div>
				</div>
				<div className='works'>
					<div className='icons'>
						<BiDollar className='icon' />
					</div>
					<div className='text'>
						<h4>Havolani nusxalash</h4>
						<p>Bo'limda - Yo'naltiruvchi dastur</p>
					</div>
				</div>
			</div>
			<h3 className='heading__h3'>
				Ulashish uchun yo'naltirishning kumulyativ tizimi:
			</h3>
			<div className='sestim__referral'>
				<div className='sestem'>
					<span className='ses sestem1'>5%</span>
					<p>saytda ro'yxatdan o'tgandan keyin</p>
				</div>
				<div className='sestem'>
					<span className='ses sestem2'>10%</span>
					<p>Individual</p>
				</div>
				<div className='sestem'>
					<span className='ses sestem3'>30%</span>
					<p>Monitoring</p>
				</div>
			</div>
			<h5>
				Diqqat! Yo'llanmalar sizning har bir tranzaktsiyangizdan xizmatdan
				tushgan daromaddan hisoblab chiqiladi. Xizmat ayirboshlashdan foyda
				keltirmaydigan hollarda, yo'llanmalar berilmaydi.
			</h5>
		</div>
	)
}

export default Referral
