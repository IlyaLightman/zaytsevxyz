import React from 'react'
import './BlogPage.scss'
import { NavLink } from 'react-router-dom'

const BlogPage = () => {

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

			<NavLink to='/create'>Создать пост</NavLink>
		</div>
	)
}

export default BlogPage