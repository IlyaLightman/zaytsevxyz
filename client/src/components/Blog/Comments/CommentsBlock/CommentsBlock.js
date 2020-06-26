import React from 'react';
import './CommentBlock.scss'
import Comment from '../Comment/Comment';

const CommentsBlock = props => {
	const {
		comments
	} = props

	return (
		<div className='CommentsBlock'>
			<Comment
				author={comments[0].author}
				content={comments[0].content}
				date={comments[0].date}
			/>
		</div>
	)
}

export default CommentsBlock