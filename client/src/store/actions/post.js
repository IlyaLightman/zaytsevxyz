import {
	FETCH_POSTS_ERROR,
	FETCH_POSTS_START, FETCH_POSTS_SUCCESS

} from './actionTypes'

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