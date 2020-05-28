import React, { useState } from 'react'
import './AuthPage.scss'
import Button from '../../components/UI/Buttons/Button/Button'
import Input from '../../components/UI/Inputs/Input/Input'

const AuthPage = () => {
	// 0 - login, 1 - registration
	const [page, setPage] = useState(0)
	const [form, setForm] = useState({
		email: '', password: '', confirm: '', nickname: ''
	})
	const [invalidFields, setInvalidFields] = useState(
		[]
	)

	const changeHandler = (field, value) => {
		setForm({ ...form, [field]: value})
		setInvalidFields(formValidator())
	}
	console.log(invalidFields)
	console.log(form)

	const registerHandler = () => {

	}

	const formValidator = () => {
		const invalidFields = []

		if (!validateEmail(form.email)) {
			invalidFields.push('email')
		}
		if (form.password.length < 6 || form.password.length > 24) {
			invalidFields.push('password')
		}
		if (form.password !== form.confirm) {
			invalidFields.push('confirm')
		}
		if (form.nickname.length < 3 || form.nickname.length > 16) {
			invalidFields.push('nickname')
		}

		return invalidFields
	}

	const login = (
		<div className='Form'>
			<p> &nbsp; </p>

			<Input
				title='Почта'
				placeholder='Введите Email'
				type='email'
				invalid={invalidFields.includes('email')}
				value={form.email}
				onChange={event => {
					changeHandler('email', event.target.value)}}
			/>

			<Input
				title='Пароль'
				placeholder='Введите пароль'
				type='password'
				invalid={invalidFields.includes('password')}
				value={form.password}
				onChange={event => {
					changeHandler('password', event.target.value)}}
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
		<div className='Form'>
			<p> &nbsp; </p>

			<Input
				title='Почта'
				placeholder='Введите Email'
				type='email'
				invalid={invalidFields.includes('email')}
				value={form.email}
				onChange={event => {
					changeHandler('email', event.target.value)}}
			/>

			<Input
				title='Пароль'
				placeholder='Введите пароль'
				type='password'
				invalid={invalidFields.includes('password')}
				value={form.password}
				onChange={event => {
					changeHandler('password', event.target.value)}}
			/>

			<Input
				title='Ещё раз'
				placeholder='Повторите пароль'
				type='password'
				invalid={invalidFields.includes('confirm')}
				value={form.confirm}
				onChange={event => {
					changeHandler('confirm', event.target.value)}}
			/>

			<Input
				title='Ник'
				placeholder='Введите никнейм'
				type='text'
				invalid={invalidFields.includes('nickname')}
				value={form.nickname}
				onChange={event => {
					changeHandler('nickname', event.target.value)}}
			/>

			<div className='Buttons'>
				<Button
					type='primary'
					theme='light'
					title='Ко входу'
					onClick={() => setPage(0)}
				/>

				<Button
					type='primary'
					theme='dark'
					title='Зарегистрироваться'
				/>
			</div>
		</div>
	)

	const validateEmail = email => {
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

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