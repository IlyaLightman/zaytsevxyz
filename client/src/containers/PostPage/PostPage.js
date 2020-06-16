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
		post ?
			<div>
				<h2 style={{color: 'gray'}}
				>{post.title}</h2>

				<ReactMarkdown
					source={post.content}
				/>

				<p style={{color: 'rgb(162,177,191)'}}
				>{post.author.name}</p>
				<p style={{color: 'rgb(126,154,160)'}}
				>{post.date}</p>
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