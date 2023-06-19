import React from 'react'
import './Footer.scss'

import partners1 from '../../assets/partners1.jpg'
import partners2 from '../../assets/partners2.jpg'
import partners3 from '../../assets/partners3.jpg'

function Footer() {
	return (
		<footer>
			<div className='footer__container'>
				<h2>Bizning hamkorlarimiz</h2>
				<div className='partners'>
					<img src={partners1} alt='partners' />
					<img src={partners2} alt='partners' className='partners2' />
					<img src={partners3} alt='partners' />
				</div>
			</div>
		</footer>
	)
}

export default Footer