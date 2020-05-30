import React from 'react'
import './PostCreator.scss'
import Button from '../../components/UI/Buttons/Button/Button'
import Input from '../../components/UI/Inputs/Input/Input'
import LargeInput from '../../components/UI/Inputs/LargeInput/LargeInput'

const PostCreator = () => {

	return (
		<div className='PostCreator'>
			<p>Ну что вводи параметры</p>
			<LargeInput
				title='title'
				placeholder='placeholder'
				invalid={true}
				// onChange
				// value
			/>

			<button
				onClick={() => {
					fetch('/api/post')
				}}
			>проверка</button>
		</div>


	)
}

export default PostCreator