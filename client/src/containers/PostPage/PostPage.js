import React, { useEffect, useState } from 'react'
import './PostPage.scss'
import { connect } from 'react-redux'
import { fetchPostById } from '../../store/actions/post'
import ReactMarkdown from 'react-markdown'
import Loader from '../../components/UI/Loaders/Loader/Loader'
import Button from '../../components/UI/Buttons/Button/Button';
import CommentCreator from '../../components/Blog/Comments/CommentCreator/CommentCreator';
import useAuth from '../../hooks/auth.hook';

const PostPage = props => {
	const { token } = useAuth()

	useEffect(() => {
		console.log('useEffect')
		props.fetchPostById(props.match.params.id)
	}, [])

	const [isCommentCreatorOpen, setCommentCreatorOpen] =
		useState(false)

	const commentButton = () => {
		setCommentCreatorOpen(!isCommentCreatorOpen)
	}

	const pageContent = post => (
		post ?
			<div>
				<h2 style={{ color: 'gray' }}
				>{post.title}</h2>

				<ReactMarkdown
					source={post.content}
				/>

				<p style={{ color: 'rgb(162,177,191)' }}
				>{post.author.name}</p>
				<p style={{ color: 'rgb(126,154,160)' }}
				>{post.date}</p>

				<div className='Buttons'>
					<Button
						type='primary'
						theme='dark'
						title='Комментировать'
						onClick={() => commentButton()}
					/>

					<Button
						type='primary'
						theme='light'
						title='❤'
						onClick={() => {
						}}
					/>
				</div>

				{token ?
					isCommentCreatorOpen ?
						<div>
							<CommentCreator
								postId={props.match.params.id}
								token={token}
							/>
						</div>
						: null
					: <p>Вам необходимо авторизоваться, чтобы оставить комментарий ;)</p>}

			</div>
			: <Loader/>
	)

	return (
		<div className='PostPage'>
			<div className="Content">
				{pageContent(props.post)}
			</div>
		</div>
	)
}

function mapStateToProps(state) {
	return {
		post: state.post.post,
		loading: state.post.loading
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchPostById: id =>
			dispatch(fetchPostById(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)