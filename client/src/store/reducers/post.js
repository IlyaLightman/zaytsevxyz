import {
	FETCH_POSTS_ERROR,
	FETCH_POSTS_START, FETCH_POSTS_SUCCESS

} from './actionTypes'

const initialState = {
	posts: [],
	loading: false,
	error: null
}

export default function postReducer(state = initialState, action) {
	switch(action.type) {
		case FETCH_POSTS_START:
			return {
				...state, loading: true
			}
		case FETCH_POSTS_SUCCESS:
			return {
				...state, loading: false, posts: action.posts
			}
		case FETCH_POSTS_ERROR:
			return {
				...state, loading: false, error: action.error
			}
		default:
			return state
	}
}