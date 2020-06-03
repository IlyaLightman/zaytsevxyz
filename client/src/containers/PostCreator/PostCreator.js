import React, { useState } from 'react'
import './PostCreator.scss'
import { connect } from 'react-redux'
import Button from '../../components/UI/Buttons/Button/Button'
import Input from '../../components/UI/Inputs/Input/Input'
import LargeInput from '../../components/UI/Inputs/LargeInput/LargeInput'
import { createPost } from '../../store/actions/post'
import Loader from '../../components/UI/Loaders/Loader/Loader'
import useAuth from '../../hooks/auth.hook'
import ReactMarkdown from 'react-markdown'

const PostCreator = props => {
	const [form, setForm] = useState({
		title: '', cover: '', content: ''
	})

	const { userId, userData, token } = useAuth()

	const changeHandler = (field, value) => {
		setForm({ ...form, [field]: value })
	}

	const createHandler = () => {
		const author = {
			name: userData.username, userId
		}
		const post = { ...form, author }

		props.createPost(post, token)
	}

	return (props.loading ? <Loader /> :
			<div className='PostCreator'>
				<p>Новый пост</p>

				<div style={{
					width: '850px',
					display: 'flex',
					justifyContent: 'space-around',
					marginBottom: '25px'
				}}>
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
				</div>

				<LargeInput
					title='Текст'
					placeholder='Markdown редактор'
					invalid={false}
					onChange={event =>
						changeHandler('content', event.target.value)}
					value={form.content}
				/>

				<div style={{
					display: 'flex'
				}}>
					<Button
						type='primary'
						theme='light'
						title='Превью'
						onClick={() => { }}
					/>

					<Button
						type='primary'
						theme='dark'
						title='Опубликовать'
						onClick={createHandler}
					/>
				</div>

				<div style={{
					width: '950px',
					border: '1px solid gray',
					borderRadius: '10px',
					padding: '5px 5px 5px 10px',
				}}>
					<ReactMarkdown
						source={form.content}
					/>
				</div>
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
		createPost: (title, cover, content, author) =>
			dispatch(createPost(title, cover, content, author))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostCreator)