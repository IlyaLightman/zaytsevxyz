import React, { useState } from 'react'
import './PostCreator.scss'
import { connect } from 'react-redux'
import Button from '../../components/UI/Buttons/Button/Button'
import Input from '../../components/UI/Inputs/Input/Input'
import LargeInput from '../../components/UI/Inputs/LargeInput/LargeInput'
import { createPost } from '../../store/actions/post'

const PostCreator = props => {
	const [form, setForm] = useState({
		title: '', text: '', cover: ''
	})

	const changeHandler = (field, value) => {
		setForm({ ...form, [field]: value })
	}

	const createHandler = () => {
		props.createPost()
	}

	return (
		<div className='PostCreator'>
			<p>Ну что вводи параметры</p>

			<LargeInput
				title='Текст'
				placeholder='placeholder'
				invalid={false}
				onChange={event =>
					changeHandler('text', event.target.value)}
				value={form.text}
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
			/>
		</div>


	)
}

function mapStateToProps() {
	return {

	}
}

function mapDispatchToProps(dispatch) {
	return {
		createPost: (title, cover, content) =>
			dispatch(createPost(title, cover, content))
	}
}

export default connect(null, mapDispatchToProps)(PostCreator)