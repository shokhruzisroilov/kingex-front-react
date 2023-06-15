import React from 'react'
import './Message.scss'

import { BiMessage } from 'react-icons/bi'

function Message() {
	return (
		<div className='message'>
			<div className='mess'><BiMessage className='mes-icon'/></div>
		</div>
	)
}

export default Message
