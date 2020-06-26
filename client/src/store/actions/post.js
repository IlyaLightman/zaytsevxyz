import {
	CREATE_COMMENT_ERROR,
	CREATE_COMMENT_START, CREATE_COMMENT_SUCCESS,
	CREATE_POST_ERROR,
	CREATE_POST_START, CREATE_POST_SUCCESS, FETCH_POST_ERROR, FETCH_POST_START, FETCH_POST_SUCCESS,
	FETCH_POSTS_ERROR,
	FETCH_POSTS_START, FETCH_POSTS_SUCCESS
} from './actionTypes'
import request from '../../utils/request'

export function fetchPosts() {
	return async dispatch => {
		dispatch(fetchPostsStart())

		try {
			const data = await request('/api/post', 'GET')

			dispatch(fetchPostsSuccess(data))
		} catch (err) {
			dispatch(fetchPostsError(err))
		}
	}
}

export function fetchPostById(id) {
	return async dispatch => {
		dispatch(fetchPostStart())

		try {
			const post = await request(`/api/post/${id}`,
				'GET')

			dispatch(fetchPostSuccess(post))
		} catch (err) {
			dispatch(fetchPostError(err))
		}
	}
}

export function createPost(post, token) {
	return async dispatch => {
		dispatch(createPostStart())

		post = {
			...post, date: Date.now(), tags: []
		}

		console.log(post)

		try {
			await request(
				'/api/post/create', 'POST', post, {
					Authorization: `Bearer ${token}`
				})

			dispatch(createPostSuccess(post))
		} catch (err) {
			dispatch(createPostError())
		}
	}
}

export function createComment(comment, postId, token) {
	return async dispatch => {
		dispatch(createCommentStart())

		try {
			const body = await request(
				'/api/comment/create', 'POST',
				{postId, comment}, {
					Authorization: `Bearer ${token}`
				})

			dispatch(createCommentSuccess(body.comment))
		} catch (err) {
			dispatch(createCommentError())
		}
	}
}

export function fetchPostsStart() {
	return {
		type: FETCH_POSTS_START
	}
}

export function fetchPostsSuccess(posts) {
	return {
		type: FETCH_POSTS_SUCCESS,
		posts
	}
}

export function fetchPostsError(err) {
	return {
		type: FETCH_POSTS_ERROR,
		error: err
	}
}

export function fetchPostStart() {
	return {
		type: FETCH_POST_START
	}
}

export function fetchPostSuccess(post) {
	return {
		type: FETCH_POST_SUCCESS,
		post
	}
}

export function fetchPostError(err) {
	return {
		type: FETCH_POST_ERROR,
		error: err
	}
}

export function createCommentStart() {
	return {
		type: CREATE_COMMENT_START
	}
}

export function createCommentSuccess(comment) {
	return {
		type: CREATE_COMMENT_SUCCESS,
		comment
	}
}

export function createCommentError() {
	return {
		type: CREATE_COMMENT_ERROR
	}
}

export function createPostStart() {
	return {
		type: CREATE_POST_START
	}
}

export function createPostSuccess(post) {
	return {
		type: CREATE_POST_SUCCESS,
		post
	}
}

export function createPostError() {
	return {
		type: CREATE_POST_ERROR
	}
}