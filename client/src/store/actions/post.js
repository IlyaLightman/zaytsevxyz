import {
	CREATE_POST_ERROR,
	CREATE_POST_START, CREATE_POST_SUCCESS,
	FETCH_POSTS_ERROR,
	FETCH_POSTS_START, FETCH_POSTS_SUCCESS
} from './actionTypes'
import request from '../../utils/request'

export function fetchPosts() {
	return async dispatch => {
		dispatch(fetchPostsStart())

		try {
			const data = await fetch('/api/post', {
				method: 'GET'
			})

			console.log(data)
			// какое-то преобразование

			dispatch(fetchPostsSuccess(data))
		} catch (err) {
			dispatch(fetchPostsError(err))
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