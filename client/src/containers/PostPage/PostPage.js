import React, { useEffect } from 'react'
import './PostPage.scss'
import { connect } from 'react-redux'
import { fetchPostById } from '../../store/actions/post'
import ReactMarkdown from 'react-markdown'
import Loader from '../../components/UI/Loaders/Loader/Loader'

const PostPage = props => {
	const postId = props.match.params.id
	const post = props.post

	useEffect(() => {
		props.fetchPostById(postId)
	}, [])

	return (
		props.loading ? <Loader /> : (
			<div className='PostPage'>
				<h2>{post.title}</h2>

				<ReactMarkdown
					source={post.content}
				/>

				<p>{post.author.name}</p>
				<p>{post.date}</p>
			</div>
		)
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
		fetchPostById: () =>
			dispatch(fetchPostById())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)