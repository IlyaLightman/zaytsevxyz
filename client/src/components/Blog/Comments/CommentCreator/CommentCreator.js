import React, { useState } from 'react';
import './CommentCreator.scss'
import { connect } from 'react-redux'
import LargeInput from '../../../UI/Inputs/LargeInput/LargeInput';
import Button from '../../../UI/Buttons/Button/Button';
import { createComment } from '../../../../store/actions/post';

const CommentCreator = props => {
	const {
		postId, token
	} = props

	const [comment, setComment] = useState('')

	const changeHandler = text => {
		setComment(text)
	}

	const createHandler = () => {
		props.createComment(comment, postId, token)
	}

	return (
		<div className='CommentCreator'>
			<LargeInput
				title='Ваш комментарий'
				placeholder='Ваш комментарий'
				invalid={false}
				onChange={event =>
					changeHandler(event.target.value)}
				value={comment}
			/>

			<p>Осталось {256 - comment.length} символов</p>

			<Button
				type='primary'
				theme='dark'
				title='Опубликовать'
				onClick={createHandler}
			/>
		</div>
	)
}

function mapStateToProps(state) {
	return {
		loading: state.post.loading
	}
}

function mapDispatchToProps(dispatch) {
	return {
		createComment: (comment, postId, token) =>
			dispatch(createComment(comment, postId, token))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentCreator)