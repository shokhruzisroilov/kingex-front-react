import React from 'react'
import { useState } from 'react'
import '../../Info.scss'
import { BsQuestionLg } from 'react-icons/bs'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

function CheckInfo() {
	const [arrow, setArrow] = useState(true)
	return (
		<section>
			<div className='right__info'>
				<div className='info__modul' onClick={() => setArrow(!arrow)}>
					<span>
						<BsQuestionLg />
						<p>Sizda AML tekshiruvi bormi?</p>
					</span>
					{arrow ? (
						<MdKeyboardArrowDown className='arrow-icon' />
					) : (
						<MdKeyboardArrowUp className='arrow-icon' />
					)}
				</div>
				{!arrow ? (
					<p>
						Biz Crystal Blockchain hamkorlari orqali har bir kiruvchi kripto
						tanga tranzaksiyalarini tekshiramiz. Ushbu tekshirish firibgarlik
						maqsadida ishlatilgan, mikser orqali o‘tgan yoki DarkNet saytlarida
						ishtirok etgan o‘g‘irlangan tangalarni aniqlash imkonini beradi.
						Agar tizim bunday tangalarni tan olsa, dastur "Xavfli to'lov"
						holatini oladi.
					</p>
				) : null}
			</div>
		</section>
	)
}

export default CheckInfo