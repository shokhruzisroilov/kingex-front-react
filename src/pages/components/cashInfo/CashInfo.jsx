import React from 'react'
import '../../Info.scss'
import { useState } from 'react'
import { BsQuestionLg } from 'react-icons/bs'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
function CashInfo() {
	const [arrow1, setArrow1] = useState(true)
	const [arrow2, setArrow2] = useState(true)
	const [arrow3, setArrow3] = useState(true)
	const [arrow4, setArrow4] = useState(true)
	const [arrow5, setArrow5] = useState(true)
	const [arrow6, setArrow6] = useState(true)
	const [arrow7, setArrow7] = useState(true)
	const [arrow8, setArrow8] = useState(true)
	return (
		<section>
			<div className='right__info'>
				<div className='info__modul' onClick={() => setArrow1(!arrow1)}>
					<span>
						<BsQuestionLg />
						<p>Joriy tariflarni qayerdan va qachon bilishim mumkin?</p>
					</span>
					{arrow1 ? (
						<MdKeyboardArrowDown className='arrow-icon' />
					) : (
						<MdKeyboardArrowUp className='arrow-icon' />
					)}
				</div>
				{!arrow1 ? (
					<p>
						Haqiqiy tariflar har kuni (yakshanbadan tashqari) quyidagi
						intervallarda tuziladi: Kiev vaqti bilan 10:00 dan 11:00 gacha (GMT
						+2) 500 dan 2 000 dollargacha bo'lgan bitimlar tarif bo'yicha emas,
						balki 25 AQSh dollari miqdorida qat'iy belgilangan komissiyaga
						tortiladi. 2000 dollar va undan ko'p - tarif bo'yicha. Amaldagi
						tariflar bilan telegram kanalimizda yoki operatordan tanishishingiz
						mumkin
					</p>
				) : null}
			</div>
			<div className='right__info'>
				<div className='info__modul' onClick={() => setArrow2(!arrow2)}>
					<span>
						<BsQuestionLg />
						<p>Filiallaringiz ish vaqti qanday?</p>
					</span>
					{arrow2 ? (
						<MdKeyboardArrowDown className='arrow-icon' />
					) : (
						<MdKeyboardArrowUp className='arrow-icon' />
					)}
				</div>
				{!arrow2 ? (
					<p>
						Chipta kassalari soatlari shaharga qarab farq qiladi. Dushanbadan
						jumagacha Kiev vaqti bilan 10:00 dan 19:00 gacha (GMT +2) Shanba -
						Kiev vaqti bilan 10:00 dan 17:00 gacha (GMT +2) Yakshanba dam olish
						kuni Kassaning joriy ish vaqtini tekshiring Sizning shahringizda
						operator bilan telegrammalarda yoki saytda qo'llab-quvvatlash.
					</p>
				) : null}
			</div>
			<div className='right__info'>
				<div className='info__modul' onClick={() => setArrow3(!arrow3)}>
					<span>
						<BsQuestionLg />
						<p> Qaysi shaharlarda almashtirgich bor?</p>
					</span>
					{arrow3 ? (
						<MdKeyboardArrowDown className='arrow-icon' />
					) : (
						<MdKeyboardArrowUp className='arrow-icon' />
					)}
				</div>
				{!arrow3 ? (
					<p>
						Biz Ukrainaning 24 ta shahrida ishlaymiz: Kiev, Xarkov, Vinnitsa,
						Odessa, Zaporojye, Dnepr, Xmelnitskiy, Lvov, Nikolaev, Krivoy Rog,
						Chernivtsi, Ivano-Frankivsk, Sumi, Ujgorod, Poltava, Lutsk,
						Rovnoxiv, Chertoxivsk. , Ternopil, Kropyvnitskiy Polsha: Krakov,
						Varshava Turkiya Istanbul Dubay (BAA) Yevropa, Amerikaning boshqa
						shaharlarida ham chiqarish mumkin. Mamlakat va shaharlar haqidagi
						dolzarb maʼlumotlarni telegram kanalimizda kuzatib boring.
					</p>
				) : null}
			</div>
			<div className='right__info'>
				<div className='info__modul' onClick={() => setArrow4(!arrow4)}>
					<span>
						<BsQuestionLg />
						<p>Kassamizni qayerdan topishingiz mumkin?</p>
					</span>
					{arrow4 ? (
						<MdKeyboardArrowDown className='arrow-icon' />
					) : (
						<MdKeyboardArrowUp className='arrow-icon' />
					)}
				</div>
				{!arrow4 ? (
					<p>
						Barcha kassalar shahar markazida joylashgan. Sizni qiziqtirgan
						shahardagi kassaning aniq manzilini ish hajmi va kesh mavjudligiga
						qarab ariza topshirilgandan so‘ng tranzaksiya vaqtida beramiz.
					</p>
				) : null}
			</div>
			<div className='right__info'>
				<div className='info__modul' onClick={() => setArrow5(!arrow5)}>
					<span>
						<BsQuestionLg />
						<p> Naqd pul bilan ayirboshlash qanday?</p>
					</span>
					{arrow5 ? (
						<MdKeyboardArrowDown className='arrow-icon' />
					) : (
						<MdKeyboardArrowUp className='arrow-icon' />
					)}
				</div>
				{!arrow5 ? (
					<p>
						Saytning asosiy sahifasida yoki telegramda operatorimizga yozish
						orqali ariza yarating Biz bitim shartlariga rozimiz (shahar, summa,
						ayirboshlash yo'nalishi) Biz siz uchun oldindan almashish va
						almashtirish uchun noyob kodni tayyorlaymiz va kassirning manzilini
						bering. Kassirga keling, kodni kiriting va sizga naqd pul
						ko'rsatiladi. Kassada kriptoni yuboring va naqd pul oling. Xuddi shu
						tarzda, almashinuv teskari yo'nalishda amalga oshiriladi (kesh -
						kripto)
					</p>
				) : null}
			</div>
			<div className='right__info'>
				<div className='info__modul' onClick={() => setArrow6(!arrow6)}>
					<span>
						<BsQuestionLg />
						<p>Almashtirishning minimal va maksimal miqdori?</p>
					</span>
					{arrow6 ? (
						<MdKeyboardArrowDown className='arrow-icon' />
					) : (
						<MdKeyboardArrowUp className='arrow-icon' />
					)}
				</div>
				{!arrow6 ? (
					<p>
						Minimal almashinuv miqdori: Ukraina - $500 Polsha - $5,000 Turkiya
						-10 000$ Yevropa - 5 000€ -10 000€ (mamlakatga qarab) Dubay (BAA) -
						$5 000 AQSh - $10 000 Birjalarning maksimal miqdori yo'q, sizni
						qiziqtirgan yo'nalishdagi mablag'lar zaxirasiga e'tibor qarating.
						Minimal miqdor bozorga qarab farq qilishi mumkin. Shaharingizning
						zaxiralari va joriy minimal miqdori bilan bu yerda tanishishingiz
						mumkin .
					</p>
				) : null}
			</div>
			<div className='right__info'>
				<div className='info__modul' onClick={() => setArrow7(!arrow7)}>
					<span>
						<BsQuestionLg />
						<p>Filialga kriptovalyuta yubora olamanmi?</p>
					</span>
					{arrow7 ? (
						<MdKeyboardArrowDown className='arrow-icon' />
					) : (
						<MdKeyboardArrowUp className='arrow-icon' />
					)}
				</div>
				{!arrow7 ? (
					<p>
						Ha sen qila olasan. Siz kassirga kelasiz, ular sizga naqd pulni
						ko'rsatadilar va keyin kripto valyutasini yuboradilar. Men har doim
						kassada kripto yuborishim mumkinmi? Ha. Kassada yetkazib berish 2000
						dollardan boshlanadi. 2000$ dan past summalar (birinchi
						almashtirishda)
					</p>
				) : null}
			</div>
			<div className='right__info'>
				<div className='info__modul' onClick={() => setArrow8(!arrow8)}>
					<span>
						<BsQuestionLg />
						<p>Tranzaksiya summasiga qarab tariflar miqdori o'zgaradimi?</p>
					</span>
					{arrow8 ? (
						<MdKeyboardArrowDown className='arrow-icon' />
					) : (
						<MdKeyboardArrowUp className='arrow-icon' />
					)}
				</div>
				{!arrow8 ? (
					<p>
						Ha, tariflar o'zgaradi. 500 dan 2 000 AQSh dollarigacha bo'lgan
						operatsiyalar tarif bo'yicha emas, balki 25 AQSh dollari miqdorida
						qat'iy komissiya oladi. 2000 dollar va 10 000 dollar - tarif
						bo'yicha 10 000$ va undan koʻproq siz uchun yaxshiroq narxda
						(bozorga qarab) Sizning holatingizdagi joriy tarifni shu yerda bilib
						olishingiz mumkin .
					</p>
				) : null}
			</div>
		</section>
	)
}

export default CashInfo