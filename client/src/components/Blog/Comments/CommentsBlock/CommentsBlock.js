import React from 'react';
import './CommentBlock.scss'
import Comment from '../Comment/Comment';

const CommentsBlock = props => {
	const {
		comments
	} = props

	const renderComments = () => (
		comments.map((comment, index) => (
			<Comment
				author={comment.author}
				content={comment.content}
				date={comment.date}
				key={index}
			/>
		))
	)

	return (
		<div className='CommentsBlock'>
			{renderComments()}
		</div>
	)
}

export default CommentsBlock