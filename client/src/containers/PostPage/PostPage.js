import React, { useEffect } from 'react'
import './PostPage.scss'
import { connect } from 'react-redux'
import { fetchPostById } from '../../store/actions/post'
import ReactMarkdown from 'react-markdown'
import Loader from '../../components/UI/Loaders/Loader/Loader'

const PostPage = props => {
	useEffect(() => {
		console.log('useEffect')
		props.fetchPostById(props.match.params.id)
	}, [])

	const pageContent = post => (
		<div className='PostPage'>
			{console.log('render')}
			{/*<h2>{post.title}</h2>*/}

			{/*<ReactMarkdown*/}
			{/*	source={post.content}*/}
			{/*/>*/}

			{/*<p>{post.author.name}</p>*/}
			{/*<p>{post.date}</p>*/}

			<p>post</p>
		</div>
	)

	console.log(props, props.post)

	return (
		props.loading ? <Loader /> : (
			pageContent(props.post)
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
		fetchPostById: id =>
			dispatch(fetchPostById(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)