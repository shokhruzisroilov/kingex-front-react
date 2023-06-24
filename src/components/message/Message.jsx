import React from 'react'
import './Message.scss'
import { useState } from 'react'

import { BiMessage, BiSend } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

function Message() {
	const [message, setMessage] = useState(true)
	const [input, setInput] = useState('')
	const [tasks, setTasks] = useState([
		{
			input: '',
		},
	])

	const  onInput = (e) => {
		setInput(e.target.value)
	}
	
	const addTask = () => {
		const newTasks = [...tasks, { input }]
		setTasks(newTasks)
	}

	return (
		<div className='message'>
			{!message ? (
				<div className='message__box'>
					<h2>Напишите свой вопрос</h2>
					<ul>
						{tasks.map(task => {
							return <li>{task.input}</li>
						})}
					</ul>
					<span>
						<input type='text' placeholder='Сообщение' onChange={onInput} />
						<div className='mess__icon' onClick={addTask}>
							<BiSend className='input-icon' />
						</div>
					</span>
				</div>
			) : null}
			<div className='mess' onClick={() => setMessage(!message)}>
				{message ? (
					<BiMessage className='mes-icon' />
				) : (
					<AiOutlineClose className='close-icon' />
				)}
			</div>
		</div>
	)
}

export default Message
