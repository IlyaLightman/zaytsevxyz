import React, { useContext } from 'react'
import './BlogPage.scss'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import Button from '../../components/UI/Buttons/Button/Button'
import useHttp from '../../hooks/http.hook'

const BlogPage = () => {
	const auth = useContext(AuthContext)
	const { request } = useHttp()

	// console.log(auth.getUserData())
	// const isAdmin = auth.getUserData() ?
	// 	auth.getUserData().isAdmin : false

	return (
		<div className='BlogPage'>
			<h3>Блог</h3>

			<div>
				<p>теги</p>
			</div>

			<div>
				<p>публикаций за внеделю за всё время</p>
			</div>

			<div>
				<p>сортировать по новизне по популярности</p>
			</div>

			<div>

			</div>

			{/*{isAdmin ?*/}
			{/*	<NavLink to='/create'>Создать пост</NavLink> : null}*/}

			<div>
				<Button
					type='primary'
					theme='dark'
					title='Войти'
					onClick={async () => {
						await request('/api/test/data', 'POST', {}, {
							Authorization: `Bearer ${await auth.token}`
						})
					}}
				/>
			</div>
		</div>
	)
}

export default BlogPage