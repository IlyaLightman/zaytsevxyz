import React from 'react'
import './PostBlock.scss'
import Button from '../../UI/Buttons/Button/Button'

const PostBlock = props => {
	const {
		cover, preview, title, date, tags
	} = props

	return (
		<div className='PostBlock'>
			<img
				style={{border: '0.1 solid black', borderRadius: '9px 9px 0 0'}}
				src={cover} alt='title'
				height='200px' width='400px'
			/>

			<h3>{title}</h3>

			<p className='Preview'
			>{preview}</p>

			<p className='Date'
			>{date}</p>
		</div>
	)
}

export default PostBlock