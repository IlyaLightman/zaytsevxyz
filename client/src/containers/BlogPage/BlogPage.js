import React, { useContext } from 'react'
import './BlogPage.scss'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import Button from '../../components/UI/Buttons/Button/Button'
import useHttp from '../../hooks/http.hook'
import PostBlock from '../../components/Blog/PostBlock/PostBlock'

const BlogPage = () => {
	const auth = useContext(AuthContext)
	const { request } = useHttp()

	const isAdmin = auth.userData ?
		auth.userData.isAdmin : false
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

			{isAdmin ?
				<NavLink to='/create'>Создать пост</NavLink> : null
			}

			<PostBlock
				cover='https://lh3.googleusercontent.com/proxy/F82ScaJieGSruD1CSPIachbDqywAfTfAnJ8q8Gtb_b7JC5mfQXhjcM5apQDMv7XzBoDpLaFaEfzb1InaYvvFQuU_KuwupiloGgs7TKWi6k9v9Q'
				preview='Что как дела как где что'
				title='Добрый вечер'
			/>

			<div>
				<Button
					type='primary'
					theme='dark'
					title='Проверка авторизации'
					onClick={async () => {
						await request('/api/test/data',
							'POST', {}, {
								Authorization: `Bearer ${auth.token}`
							})
					}}
				/>
			</div>
		</div>
	)
}

export default BlogPage