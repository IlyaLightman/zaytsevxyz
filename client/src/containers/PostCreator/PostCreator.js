import React from 'react'
import './PostCreator.scss'
import Button from '../../components/UI/Buttons/Button/Button'
import Input from '../../components/UI/Inputs/Input/Input'
import LargeInput from '../../components/UI/Inputs/LargeInput/LargeInput'

const PostCreator = () => {

	return (
		<div className='PostCreator'>
			<p>Ну что вводи параметры</p>

			<Input
				title='Название'
				placeholder='Название поста'
				invalid={false}
			/>

			<LargeInput
				title='title'
				placeholder='placeholder'
				invalid={false}
				// onChange
				// value
			/>

			<Input
				title='Обложка'
				placeholder='Ссылка на картинку'
				invalid={false}
			/>

			<Button
				type='primary'
				theme='dark'
				title='Опубликовать'
			/>
		</div>


	)
}

export default PostCreator