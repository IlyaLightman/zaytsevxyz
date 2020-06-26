import React from 'react';
import './Comment.scss'

const Comment = props => {
	const {
		author, content, date
	} = props

	return <div className='Comment'>
		<p style={{
			fontSize: '23px', margin: '5px 5px 7px 5px'
		}}
		>{author.name}</p>

		<p style={{
			fontSize: '17px', margin: '5px 5px 5px 5px'
		}}
		>{content}</p>

		<p style={{
			fontSize: '15px', margin: '5px 5px 5px 5px', color: 'rgb(119,152,167)'
		}}
		>{date}</p>
	</div>
}

export default Comment