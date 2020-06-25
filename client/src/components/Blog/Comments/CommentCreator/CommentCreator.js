import React, { useState } from 'react';
import './CommentCreator.scss'
import LargeInput from '../../../UI/Inputs/LargeInput/LargeInput';
import Button from '../../../UI/Buttons/Button/Button';
import useHttp from '../../../../hooks/http.hook';

const CommentCreator = props => {
	const {
		postId, token
	} = props

	const [comment, setComment] = useState('')

	const { request, error, loading } = useHttp()

	const changeHandler = text => {
		setComment(text)
	}

	const createHandler = () => {

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

export default CommentCreator