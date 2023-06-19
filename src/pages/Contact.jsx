import React from 'react'
import './Contact.scss'
import {CiTimer} from 'react-icons/ci'
import { FiUser } from 'react-icons/fi'
import { TbBrandTelegram } from 'react-icons/tb'
import { TfiEmail } from 'react-icons/tfi'

function Contact() {
	return (
		<div className='contact'>
			<div className='contact__container'>
				<h3>Kontaktlar</h3>
				<p>
					Agar sizda biron bir savol bo'lsa, bizga yozing va biz sizga yordam
					beramiz!
				</p>
				<div className='support'>
					<h4>Texnik yordam</h4>
					<div className='sup'>
						<div className='all__sup'>
							<CiTimer className='sup-icons' />
							<span>
								<h5>Ayirboshlash</h5>
								<h6>24/7 almashish</h6>
							</span>
						</div>
						<div className='all__sup'>
							<CiTimer className='sup-icons' />
							<span>
								<h5>Kassalar dushanbadan jumagacha ishlaydi</h5>
								<h6>10:00-18:00</h6>
							</span>
						</div>
						<div className='all__sup'>
							<CiTimer className='sup-icons' />
							<span>
								<h5>shanba</h5>
								<h6>10:00-17:00 (yakshanba dam olish kuni)</h6>
							</span>
						</div>
						<div className='all__sup'>
							<FiUser className='sup-icons' />
							<span>
								<h5>Bog'lanish</h5>
								<a href='#'>Bog'lanish</a>
							</span>
						</div>
						<div className='all__sup'>
							<TbBrandTelegram className='sup-icons' />
							<span>
								<h5>Umumiy savollar uchun</h5>
								<a href='#'>Telegram (Umumiy savollar)</a>
							</span>
						</div>
						<div className='all__sup'>
							<TbBrandTelegram className='sup-icons' />
							<span>
								<h5>Naqd pul almashinuvi</h5>
								<a href='#'>Telegram (Naqd pul almashinuvi)</a>
							</span>
						</div>
						<div className='all__sup'>
							<TfiEmail className='sup-icons' />
							<span>
								<h5>Elektron pochta</h5>
								<a href='#'>info@kingex.io</a>
							</span>
						</div>
						<div className='all__sup'>
							<TbBrandTelegram className='sup-icons' />
							<span>
								<h5>Siyosat</h5>
								<a href='#'>AML/KYC</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
