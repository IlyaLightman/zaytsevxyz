import React from 'react';
import './Comment.scss'

const Comment = props => {
	const {
		author, content, date
	} = props

	return <div className='Comment'>
		<p style={{
			fontSize: '23px'
		}}
		>{author.name}</p>

		<p style={{
			fontSize: '17px'
		}}
		>{content}</p>

		<p style={{
			fontSize: '15px'
		}}
		>{date}</p>
	</div>
}

export default Comment