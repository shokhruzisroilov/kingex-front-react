import React from 'react'
import '../../Info.scss'
import { useState } from 'react'
import { BsQuestionLg } from 'react-icons/bs'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

function GeneralInfo() {
	const [arrow1, setArrow1] = useState(true)
	const [arrow2, setArrow2] = useState(true)
	const [arrow3, setArrow3] = useState(true)
	const [arrow4, setArrow4] = useState(true)

	return (
		<section>
			<div className='right__info'>
				<div className='info__modul' onClick={() => setArrow1(!arrow1)}>
					<span>
						<BsQuestionLg />
						<p> Ariza qancha vaqt davomida ko'rib chiqiladi?</p>
					</span>
					{arrow1 ? (
						<MdKeyboardArrowDown className='arrow-icon' />
					) : (
						<MdKeyboardArrowUp className='arrow-icon' />
					)}
				</div>
				{!arrow1 ? (
					<p>
						To'lovlarni kreditlash qoidalariga ko'ra, u quyidagi shartlarga ega:
						Ukraina banklarida Visa/MasterCard 5 dan 65 daqiqagacha davom etadi
						(amalda) Toʻlov sizdan toʻlov kelishi bilanoq darhol yuboriladi
						(bank shartlari 3 kungacha vaqt olishi mumkin) Ilova "Tugallandi"
						holatini oladi - bu to'lov siz ko'rsatgan ma'lumotlarga qabul qilish
						uchun yuborilganligini anglatadi. Agar to'lov belgilangan vaqt
						ichida o'tkazilmagan bo'lsa - tushuntirish uchun xizmat ko'rsatish
						xizmatiga murojaat qilishni unutmang.
					</p>
				) : null}
			</div>
			<div className='right__info'>
				<div className='info__modul' onClick={() => setArrow2(!arrow2)}>
					<span>
						<BsQuestionLg />
						<p>Agar arizada koʻrsatilganidan kam toʻlagan boʻlsam-chi?</p>
					</span>
					{arrow2 ? (
						<MdKeyboardArrowDown className='arrow-icon' />
					) : (
						<MdKeyboardArrowUp className='arrow-icon' />
					)}
				</div>
				{!arrow2 ? (
					<p>
						Sizning arizangiz almashinuv shartlariga ko'ra, barcha tarmoq
						tasdiqlarini olgandan so'ng to'lov miqdori uchun qayta hisoblab
						chiqiladi. Ehtiyot bo'ling, ko'rsating va teng miqdorda to'lang.
					</p>
				) : null}
			</div>
			<div className='right__info'>
				<div className='info__modul' onClick={() => setArrow3(!arrow3)}>
					<span>
						<BsQuestionLg />
						<p>Toʻlov paytida notoʻgʻri tarmoq/valyuta!</p>
					</span>
					{arrow3 ? (
						<MdKeyboardArrowDown className='arrow-icon' />
					) : (
						<MdKeyboardArrowUp className='arrow-icon' />
					)}
				</div>
				{!arrow3 ? (
					<p>
						Afsuski, bunday holatlar uchrab turadi. Mutaxassislarimiz pulni
						qaytarish imkoniyatini tekshiradilar. Agar pulni qaytarish mumkin
						bo'lsa, u 10 kun ichida to'lov miqdoridan minus 10% miqdorida amalga
						oshiriladi.
					</p>
				) : null}
			</div>
			<div className='right__info'>
				<div className='info__modul' onClick={() => setArrow4(!arrow4)}>
					<span>
						<BsQuestionLg />
						<p>Men arizamni bekor qilmoqchiman, nima qilishim kerak?</p>
					</span>
					{arrow4 ? (
						<MdKeyboardArrowDown className='arrow-icon' />
					) : (
						<MdKeyboardArrowUp className='arrow-icon' />
					)}
				</div>
				{!arrow4 ? (
					<p>
						Ilovani bekor qilish uchun siz resurs yordamiga murojaat qilishingiz
						kerak. To'lov bizning hamyonimizga o'tkazilgandan keyin 10% xizmat
						komissiyasi bilan qaytariladi. “Tugallandi” maqomini olgan
						arizalarni bekor qilish mumkin emas.
					</p>
				) : null}
			</div>
		</section>
	)
}

export default GeneralInfo