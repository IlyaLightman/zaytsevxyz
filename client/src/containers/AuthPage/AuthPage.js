import React from 'react'
import './AuthPage.scss'

const AuthPage = () => {

	return (
		<div className='AuthPage'>
			<h2>Уга вуга</h2>
			<div className='Selection'>
				<div className='LoginSelect'>
					<p>Логин</p>
				</div>

				<div className='RegSelect'>
					<p>Регистрация</p>
				</div>
			</div>
			<p>Зарегистрируйтесь, чтобы писать комментарии... или да</p>
		</div>
	)
}

export default AuthPage