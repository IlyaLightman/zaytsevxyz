import React, { useState } from 'react'
import './AuthPage.scss'
import Button from '../../components/UI/Buttons/Button/Button'
import Input from '../../components/UI/Inputs/Input/Input'

const AuthPage = () => {
	// 0 - login, 1 - registration
	const [page, setPage] = useState(0)

	const login = (
		<div className='Form'>
			<p> &nbsp; </p>

			<Input
				title='Почта'
				placeholder='Введите Email'
				invalid={false}
				onChange
			/>

			<Input
				title='Пароль'
				placeholder='Введите пароль'
				invalid={true}
				onChange
			/>

			<div className='Buttons'>
				<Button
					type='primary'
					theme='light'
					title='К регистрации'
					onClick={() => setPage(1)}
				/>

				<Button
					type='primary'
					theme='dark'
					title='Войти'
				/>
			</div>

		</div>
	)

	const register = (
		<div>
			<p>register</p>
			<button onClick={() => setPage(0)}>ко входу</button>
		</div>
	)

	return (
		<div className='AuthPage'>
			{page === 0 ? <h2 style={{fontFamily: 'Bahnschrift',
				fontSize: '50px', marginBottom: '5px'}}
				>Войдите</h2>
				: <h2 style={{fontFamily: 'Bahnschrift',
				fontSize: '50px', marginBottom: '5px'}}
				>Зарегистрируйтесь</h2>}

			{page === 0 ? login : register}

			<p>Зарегистрируйтесь, чтобы писать комментарии... или да</p>
		</div>
	)
}

export default AuthPage