import React, { useState } from 'react'
import './PostBlock.scss'
import { Redirect } from 'react-router-dom'

const PostBlock = props => {
	const {
		cover, preview, title, date, tags, id
	} = props
	const [redirect, setRedirect] = useState(false)

	const clickHandler = () => {
		setRedirect(true)
	}

	return (
		redirect ? <Redirect to={`/blog/${id}`}/> :
			<div className='PostBlock'
			onClick={clickHandler}>
				<img
					style={{ border: '0.1 solid black', borderRadius: '9px 9px 0 0' }}
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