import React from 'react'
import './Info.scss'

import { BsArrowDownShort, BsQuestionLg } from 'react-icons/bs'

function Info() {
	return (
		<div className='info'>
			<div className='info__container'>
				<div className='left__info'>
					<h3>TSS</h3>
					<p>
						Bu erda siz eng ko'p beriladigan savollarga <br />
						javob topishingiz mumkin
					</p>
					<div className='info__tab'>
						<span>Umumiy savollar</span>
						<span>Naqd pul operatsiyalari</span>
						<span>AML tekshiruvi</span>
					</div>
				</div>
				<div className='right__info'>
					<div className='info__modul'>
						<span>
							<BsQuestionLg />
							<p>Ariza qancha muddatda ko'rib chiqiladi?</p>
						</span>
						<BsArrowDownShort className='arrow-icon' />
					</div>
					<div className='info__modul'>
						<span>
							<BsQuestionLg />
							<p>Ariza qancha muddatda ko'rib chiqiladi?</p>
						</span>
						<BsArrowDownShort className='arrow-icon' />
					</div>
					<div className='info__modul'>
						<span>
							<BsQuestionLg />
							<p>Ariza qancha muddatda ko'rib chiqiladi?</p>
						</span>
						<BsArrowDownShort className='arrow-icon' />
					</div>
					<div className='info__modul'>
						<span>
							<BsQuestionLg />
							<p>Ariza qancha muddatda ko'rib chiqiladi?</p>
						</span>
						<BsArrowDownShort className='arrow-icon' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Info