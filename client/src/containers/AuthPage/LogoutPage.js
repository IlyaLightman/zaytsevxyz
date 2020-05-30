import React, { useContext, useState } from 'react'
import Button from '../../components/UI/Buttons/Button/Button'
import Redirect from 'react-router-dom/es/Redirect'
import { AuthContext } from '../../context/AuthContext'

const LogoutPage = () => {
	const [redirect, setRedirect] = useState(false)
	const { logout } = useContext(AuthContext)

	return (
		redirect ? <Redirect to='/' /> :
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center'
				}}
			>
				<h2 style={{fontFamily: 'Bahnschrift',
					fontSize: '450%', marginBottom: '5px'}}
				>Хотите выйти?</h2>

				<div
					style={{
						display: 'flex',
						flexDirection: 'row'
					}}
				>
					<Button
						type='primary'
						theme='light'
						title='Остаться'
						onClick={() => setRedirect(true)}
					/>

					<Button
						type='primary'
						theme='dark'
						title='Выйти'
						onClick={() => {
							logout()
							setRedirect(true)
						}}
					/>
				</div>

			</div>
	)
}

export default LogoutPage