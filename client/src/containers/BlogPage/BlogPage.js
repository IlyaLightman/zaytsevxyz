import React, { useContext, useEffect } from 'react'
import './BlogPage.scss'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import Button from '../../components/UI/Buttons/Button/Button'
import useHttp from '../../hooks/http.hook'
import PostBlock from '../../components/Blog/PostBlock/PostBlock'
import { fetchPosts } from '../../store/actions/post'
import Loader from '../../components/UI/Loaders/Loader/Loader'

const BlogPage = props => {
	const auth = useContext(AuthContext)
	const { request } = useHttp()

	useEffect(() => {
		props.fetchPosts()
	}, [])

	const isAdmin = auth.userData ?
		auth.userData.isAdmin : false

	const fetchedPosts = posts => {
		return posts.map((post, index) => {
			return <PostBlock
				key={'p' + index}
				cover={post.cover}
				preview={post.preview}
				title={post.title}
				id={post._id}
				date='30.04.20'
			/>
		})
	}

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
				cover='https://avatars.mds.yandex.net/get-pdb/1774156/c29007c1-a75a-4f7a-b761-4c271d896d54/s1200?webp=false'
				preview='Что как дела как где что'
				title='Добрый вечер'
				date='30.05.20'
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

			{props.loading ? <Loader /> : <div className='Posts'>
				{fetchedPosts(props.posts)}
			</div>}
		</div>
	)
}

function mapStateToProps(state) {
	return {
		posts: state.post.posts,
		loading: state.post.loading
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchPosts: () =>
			dispatch(fetchPosts())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage)