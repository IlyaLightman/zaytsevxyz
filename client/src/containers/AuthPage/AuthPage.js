import React, { useState } from 'react'
import './AuthPage.scss'

const AuthPage = () => {
	// 0 - login, 1 - registration
	const [page, setPage] = useState(0)

	const login = (
		<div>
			<p>login</p>
			<button onClick={() => setPage(1)}>к регистрации</button>
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