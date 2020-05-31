import {
	CREATE_POST_ERROR,
	CREATE_POST_START, CREATE_POST_SUCCESS,
	FETCH_POSTS_ERROR,
	FETCH_POSTS_START, FETCH_POSTS_SUCCESS

} from '../actions/actionTypes'

const initialState = {
	posts: [],
	loading: false,
	error: null,
	post: null
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
		case CREATE_POST_START:
			return {
				...state, loading: true
			}
		case CREATE_POST_SUCCESS:
			return {
				...state, loading: false, post: action.post
			}
		case CREATE_POST_ERROR:
			return {
				...state,
			}
		default:
			return state
	}
}