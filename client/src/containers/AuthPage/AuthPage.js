import React, { useState } from 'react'
import './AuthPage.scss'
import Button from '../../components/UI/Buttons/Button/Button'

const AuthPage = () => {
	// 0 - login, 1 - registration
	const [page, setPage] = useState(0)

	const login = (
		<div className='Form'>
			<p>login</p>
			<button onClick={() => setPage(1)}>к регистрации</button>

			<div className='Buttons'>
				<Button
					type='primary'
					theme='light'
					title='К регистрации'
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
			{page === 0 ? <h2>Войдите</h2>
				: <h2>Зарегистрируйтесь</h2>}

			{page === 0 ? login : register}

			<p>Зарегистрируйтесь, чтобы писать комментарии... или да</p>
		</div>
	)
}

export default AuthPage