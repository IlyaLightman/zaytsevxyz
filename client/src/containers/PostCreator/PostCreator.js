import React, { useState } from 'react'
import './PostCreator.scss'
import { connect } from 'react-redux'
import Button from '../../components/UI/Buttons/Button/Button'
import Input from '../../components/UI/Inputs/Input/Input'
import LargeInput from '../../components/UI/Inputs/LargeInput/LargeInput'
import { createPost } from '../../store/actions/post'
import Loader from '../../components/UI/Loaders/Loader/Loader'

const PostCreator = props => {
	const [form, setForm] = useState({
		title: '', cover: '', content: ''
	})

	const changeHandler = (field, value) => {
		setForm({ ...form, [field]: value })
	}

	const createHandler = () => {
		props.createPost(...form)
	}

	return (props.loading ? <Loader /> :

			<div className='PostCreator'>
				<p>Ну что вводи параметры</p>

				<LargeInput
					title='Текст'
					placeholder='Контент'
					invalid={false}
					onChange={event =>
						changeHandler('content', event.target.value)}
					value={form.content}
				/>

				<Input
					title='Название'
					placeholder='Название поста'
					invalid={false}
					value={form.title}
					onChange={event =>
						changeHandler('title', event.target.value)}
				/>

				<Input
					title='Обложка'
					placeholder='Ссылка на картинку'
					invalid={false}
					value={form.cover}
					onChange={event =>
						changeHandler('cover', event.target.value)}
				/>

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
		createPost: (title, cover, content) =>
			dispatch(createPost(title, cover, content))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostCreator)