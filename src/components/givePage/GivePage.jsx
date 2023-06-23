import React from 'react'
import './GivePage.scss'
import Money from '../money/Money'

import { BsArrowLeftRight } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'

function GivePage({currencyData}) {
	return (
		<div className='give__page'>
			<span className='header_page'>
				<h3>Bering</h3>
				<BsArrowLeftRight className='arrows' />
			</span>
			<div className='input'>
				<input type='text' placeholder='ot 0.01 BTC' />
				<span className='input__icon'>
					<h3>BTC</h3>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 2000 2000'
						width='100%'
						height='100%'
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
				</span>
			</div>
			<span className='paragraf__spam'>
				dan <span className='paragraf1'>0.01</span> gacha{' '}
				<span className='paragraf2'>10.68 BTC</span>
			</span>
			<div className='search'>
				<BiSearch className='search-icon' />
				<input
					type='text'
					className='search-input'
					placeholder='Valyutani qidiring...'
				/>
			</div>
			<div className='money__all'>
				{
					currencyData?.map((item) => {
						return (
							<Money
								key={item.id}
								id={item.id}
								name={item.name}
								unit={item.unit}
								created_at={item.created_at}
							/>
						)
					})
				}
			</div>
		</div>
	)
}

export default GivePage
