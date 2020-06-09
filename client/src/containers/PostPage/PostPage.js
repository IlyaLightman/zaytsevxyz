import React from 'react'
import './PostPage.scss'
import { connect } from 'react-redux'
import { fetchPostById } from '../../store/actions/post'

const PostPage = props => {
	const postId = props.match.params.id

	return (
		<div>

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
		fetchPostById: () =>
			dispatch(fetchPostById())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)